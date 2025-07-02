"use client";

import React, { useState } from "react";

interface Comment {
  id: string;
  name: string;
  attendance: "hadir" | "tidak";
  message: string;
  timestamp: Date;
}

const CommentSection: React.FC = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak">("hadir");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      attendance,
      message: message.trim(),
      timestamp: new Date(),
    };

    setComments((prev) => [newComment, ...prev]);

    // Reset form
    setName("");
    setAttendance("hadir");
    setMessage("");
    setIsSubmitting(false);
  };

  const displayedComments = showAll ? comments : comments.slice(0, 3);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="min-h-screen bg-cream">
      <div className="max-w-md mx-auto  p-6">
        {/* Header */}
        <div className="text-center mb-8 pt-9">
          <h1 className="text-3xl font-kaushian text-gray-800 mb-4">Ucapan Selamat</h1>
          <div className="w-64 h-[1px] bg-gray-800 mx-auto"></div>
          <p className="text-sm font-niramitmedium text-gray-800 mt-7">Silakan memberikan ucapan selamat kepada kedua mempelai</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <input
              type="text"
              placeholder="Nama anda..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white/70 border border-orange-200 rounded-lg text-gray-700 font-niramit placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              required
            />
          </div>

          <div>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value as "hadir" | "tidak")}
              className="w-full px-4 py-3 bg-white/70 border border-orange-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent font-niramit"
            >
              <option value="hadir">Hadir</option>
              <option value="tidak">Tidak Hadir</option>
            </select>
          </div>

          <div>
            <textarea
              placeholder="Pesan atau ucapan untuk kedua mempelai..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white/70 border border-orange-200 rounded-lg text-gray-700 placeholder-gray-500 font-niramit resize-none focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            className="w-full font-niramit bg-orange-200 hover:bg-orange-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
        </form>

        {/* Comments Section */}
        {comments.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-800 font-niramit mb-4">Ucapan Selamat ({comments.length})</h2>

            <div className="space-y-4">
              {displayedComments.map((comment) => (
                <div key={comment.id} className="bg-orange-200/60 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className=" font-niramitmedium text-gray-800 text-sm">{comment.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${comment.attendance === "hadir" ? "bg-green-100 font-niramitmedium text-green-700" : "bg-red-100 text-red-700"}`}>
                        {comment.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                      </span>
                    </div>
                    <span className="text-xs font-niramit text-gray-500">{formatDate(comment.timestamp)}</span>
                  </div>
                  <p className="text-gray-700 font-niramit text-sm leading-relaxed">{comment.message}</p>
                </div>
              ))}
            </div>

            {comments.length > 3 && (
              <button onClick={() => setShowAll(!showAll)} className="w-full bg-white/50 hover:bg-white/70 text-gray-700 font-medium py-2 px-4 rounded-lg border border-orange-200 transition-colors duration-200">
                {showAll ? "Sembunyikan" : `Lihat Semua (${comments.length - 3} lainnya)`}
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {comments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm font-niramit">Belum ada ucapan selamat. Jadilah yang pertama!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
