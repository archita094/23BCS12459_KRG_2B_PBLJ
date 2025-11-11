import React, { useState } from 'react';
import './PeerPage.css';

export function PeerPage() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah M.',
      time: '2 hours ago',
      content: "Had my first therapy session today and I already feel a weight lifted off my shoulders. Sometimes just talking about what's bothering you makes such a difference. 💙",
      likes: 12,
      comments: [
        { id: 1, author: 'Ava', content: 'So proud of you! 💙' },
        { id: 2, author: 'Liam', content: 'Keep going, you got this!' },
        { id: 3, author: 'Noah', content: 'Talking helps a lot!' }
      ],
      tags: ['therapy', 'progress'],
      likedByUser: false
    },
    {
      id: 2,
      author: 'Mike R.',
      time: '4 hours ago',
      content: 'Meditation day 30! 🧘‍♂️ Started with just 5 minutes and now I can do 20. The anxiety attacks have reduced significantly. Keep going everyone!',
      likes: 18,
      comments: [
        { id: 1, author: 'Emma', content: 'Wow, congrats!' },
        { id: 2, author: 'Olivia', content: 'Inspiring!' },
        { id: 3, author: 'Ethan', content: 'I need to start meditating too.' },
        { id: 4, author: 'Sophia', content: 'Great progress!' }
      ],
      tags: ['meditation', 'anxiety', 'milestone'],
      likedByUser: false
    },
    {
      id: 3,
      author: 'Alex T.',
      time: '6 hours ago',
      content: "Feeling grateful for this community. Some days are harder than others, but knowing you're all here makes the journey less lonely. Thank you ✨",
      likes: 25,
      comments: [
        { id: 1, author: 'Mia', content: 'We are here for you!' },
        { id: 2, author: 'Lucas', content: 'Such a kind post!' },
        { id: 3, author: 'Charlotte', content: 'Love this community 💛' }
      ],
      tags: ['gratitude', 'community'],
      likedByUser: false
    },
    {
      id: 4,
      author: 'Emma L.',
      time: '1 day ago',
      content: "Quick reminder: It's okay to have bad days. Progress isn't linear. Be kind to yourself. You're doing better than you think. 💚",
      likes: 31,
      comments: [
        { id: 1, author: 'James', content: 'Needed this today!' },
        { id: 2, author: 'Isabella', content: 'Very true 💚' },
        { id: 3, author: 'Benjamin', content: 'Thanks for sharing!' }
      ],
      tags: ['selfcare', 'reminder'],
      likedByUser: false
    }
  ]);

  const [visibleComments, setVisibleComments] = useState<{ [key: number]: boolean }>({});
  const [commentInput, setCommentInput] = useState<{ [key: number]: string }>({});

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        time: 'just now',
        content: newPost,
        likes: 0,
        comments: [],
        tags: [],
        likedByUser: false
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
            likedByUser: !post.likedByUser
          }
        : post
    ));
  };

  const toggleComments = (postId: number) => {
    setVisibleComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleCommentChange = (postId: number, value: string) => {
    setCommentInput(prev => ({
      ...prev,
      [postId]: value
    }));
  };

  const submitComment = (postId: number) => {
    if (commentInput[postId]?.trim()) {
      const newComment = {
        id: posts.find(p => p.id === postId)!.comments.length + 1,
        author: 'You',
        content: commentInput[postId]
      };
      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ));
      setCommentInput(prev => ({ ...prev, [postId]: '' }));
    }
  };

  const supportGroups = [
    { name: 'Anxiety Support', members: 1247, icon: '🌊', link: 'https://discord.gg/socialanxiety' },
    { name: 'Depression & Hope', members: 892, icon: '🌅', link: 'https://discord.gg/mhsc' },
    { name: 'PTSD Recovery', members: 634, icon: '🌟', link: 'https://discord.gg/oursupportcircle-osc-ocd-disorder-s-988770359773913098' },
    { name: 'Meditation Circle', members: 1856, icon: '🧘‍♀️', link: 'https://discord.gg/mhsc' },
    { name: 'Young Adults', members: 743, icon: '🌱', link: 'https://discord.gg/mhsc' },
    { name: 'OCD Support', members: 567, icon: '🧠', link: 'https://discord.gg/oursupportcircle-osc-ocd-disorder-s-988770359773913098' }
  ];

  return (
    <div className="peer-page">
      <div className="peer-header">
        <h1>Community Support</h1>
        <p>Connect, share, and support each other on the journey to mental wellness</p>
      </div>

      <div className="peer-layout">
        {/* Main Feed */}
        <div className="main-feed">
          {/* Create Post */}
          <div className="create-post">
            <h3>Share Your Thoughts</h3>
            <form onSubmit={handlePostSubmit}>
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind? Share your journey, thoughts, or encouragement..."
                rows={4}
              />
              <div className="post-actions">
                <div className="post-options">
                  <span className="post-hint">💡 Your posts are anonymous and supportive</span>
                </div>
                <button type="submit" disabled={!newPost.trim()}>
                  Share Post
                </button>
              </div>
            </form>
          </div>

          {/* Posts Feed */}
          <div className="posts-feed">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-author">
                    <div className="author-avatar">{post.author.charAt(0)}</div>
                    <div className="author-info">
                      <div className="author-name">{post.author}</div>
                      <div className="post-time">{post.time}</div>
                    </div>
                  </div>
                </div>

                <div className="post-content">{post.content}</div>

                {post.tags.length > 0 && (
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="post-tag">#{tag}</span>
                    ))}
                  </div>
                )}

                <div className="post-actions-bar">
                  <button 
                    className={`action-btn ${post.likedByUser ? 'liked' : ''}`}
                    onClick={() => toggleLike(post.id)}
                  >
                    ❤️ {post.likes}
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => toggleComments(post.id)}
                  >
                    💬 {post.comments.length}
                  </button>
                </div>

                {/* Comments Section */}
                {visibleComments[post.id] && (
                  <div className="comments-section">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="comment">
                        <strong>{comment.author}:</strong> {comment.content}
                      </div>
                    ))}
                    <div className="add-comment">
                      <input
                        type="text"
                        value={commentInput[post.id] || ''}
                        onChange={(e) => handleCommentChange(post.id, e.target.value)}
                        placeholder="Write a comment..."
                      />
                      <button onClick={() => submitComment(post.id)} className="btn-post">Post</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="peer-sidebar">
          {/* Community Guidelines */}
          <div className="sidebar-card">
            <h3>Community Guidelines</h3>
            <ul className="guidelines-list">
              <li>🤝 Be kind and supportive</li>
              <li>🔒 Respect privacy and anonymity</li>
              <li>💙 Share encouragement, not medical advice</li>
              <li>🌟 Celebrate small victories</li>
              <li>🚫 No discrimination or harmful content</li>
            </ul>
          </div>

          {/* Support Groups */}
          <div className="sidebar-card">
            <h3>Support Groups</h3>
            <div className="support-groups">
              {supportGroups.map((group, index) => (
                <div key={index} className="support-group">
                  <div className="group-icon">{group.icon}</div>
                  <div className="group-info">
                    <div className="group-name">{group.name}</div>
                    <div className="group-members">{group.members.toLocaleString()} members</div>
                  </div>
                  <a href={group.link} target="_blank" rel="noopener noreferrer">
                    <button className="join-btn">Join</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
