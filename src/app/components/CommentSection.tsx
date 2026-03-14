"use client";

import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([
    { name: "Alex", text: "Great article! Really helped me with my sales workflow.", date: "2 hours ago" },
    { name: "Jordan", text: "Thanks for sharing these prompts!", date: "5 hours ago" },
  ]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && name.trim()) {
      setComments([{ name: name, text: newComment, date: "Just now" }, ...comments]);
      setNewComment('');
      setName('');
    }
  };

  return (
    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #374151' }}>
      <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.3rem' }}>💬 Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff' }} />
        <textarea placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={3} style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff', resize: 'vertical' }} />
        <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Post Comment</button>
      </form>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {comments.map((comment, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600', color: '#fff' }}>{comment.name}</span>
              <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{comment.date}</span>
            </div>
            <p style={{ color: '#d1d5db', margin: 0 }}>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
