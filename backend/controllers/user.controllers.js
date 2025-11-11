const User = require("../models/user.model.js");
const NormalChat = require("../models/normalChat.model.js"); // ✅ import
const IncognitoChat = require("../models/incognitoChat.model.js"); // ✅ import
// ------------------ SIGN IN ------------------
const userSignIn = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

   
const emailRegex = /^[^\s@]+@(example\.com|gmail\.com)$/;
if (!email || !emailRegex.test(email)) {
  return res.status(400).json({ message: "Email must be from @gmail.com", flag: "false" });
}

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered", flag: "false" });
    }

    // validate password length
    if (!password || password.length <= 7) {
      return res.status(400).json({ message: "Password must be at least 8 characters long", flag: "false" });
    }

    // check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match", flag: "false" });
    }

    const now = new Date();

    const newUser = new User({
      username,
      email,
      password,            // ❌ plain password (use bcrypt later)
      streak: 0,
      sessionCount: 0,
      totalActiveDays: 1,
      moodAvg: 5,
      lastLoginDate: now
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      flag: "true",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        streak: newUser.streak,
        sessionCount: newUser.sessionCount,
        totalActiveDays: newUser.totalActiveDays,
        moodAvg: newUser.moodAvg
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", flag: "false", error });
  }
};


const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // check password directly (plain)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const now = new Date();
    const today = now.toDateString();
    const lastLoginDay = user.lastLoginDate ? user.lastLoginDate.toDateString() : null;
   
    // ✅ Remove all incognito chats completely
    await IncognitoChat.deleteMany({ userId: user._id });
    // Handle total active days
    if (lastLoginDay !== today) {
      user.totalActiveDays += 1; // increment only if not logged in today
    }

    // Handle streak
    if (lastLoginDay === today) {
      // already logged in today
      // streak unchanged
      // optional: you can send a message about "streak already counted today"
    } else {
      // calculate difference in days
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastLoginDay === yesterday.toDateString()) {
        user.streak += 1; // consecutive day → increase streak
      } else {
        user.streak = 0; // missed days → reset streak
      }
    }

    // increment session count
    user.sessionCount += 1;

    // update last login date
    user.lastLoginDate = now;

    await user.save();

    res.json({
      message: "Login successful",
      flag:"true",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        streak: user.streak,
        sessionCount: user.sessionCount,
        totalActiveDays: user.totalActiveDays,
        moodAvg: user.moodAvg
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error",flag:"false", error });
  }
};
//--------------------update mood avg------------------

const updateMoodAvg = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { userId, moodValue } = req.body;

    if (!userId || moodValue === undefined) {
      return res.status(400).json({ message: "userId and moodValue required" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const now = new Date();
    const today = now.toDateString();
    const lastMoodDay = user.lastMoodCheckDate ? user.lastMoodCheckDate.toDateString() : null;

    if (!user.lastMoodCheckDate) {
      // first mood entry
      user.moodAvg = moodValue;
      user.totalMoodSelected = 1;
      user.lastMoodCheckDate = now;
    } else if (lastMoodDay === today) {
      // already submitted mood today
      return res.status(200).json({ 
        message: "Mood already updated today",
        moodAvg: user.moodAvg
      });
    } else {
      // update mood avg
      user.totalMoodSelected += 1;
      user.moodAvg = (user.moodAvg * (user.totalMoodSelected - 1) + moodValue) / user.totalMoodSelected;
      user.lastMoodCheckDate = now;
    }

    await user.save();

    res.status(200).json({
      message: "Mood updated successfully",
      flag:"true",
      moodAvg: user.moodAvg,
      totalMoodSelected: user.totalMoodSelected
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};



// ------------------ EXPORTS ------------------
module.exports = {
  userSignIn,userLogin,updateMoodAvg
};
