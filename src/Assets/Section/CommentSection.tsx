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
    <section className="min-h-screen bg-cream w-full">
      <div className="w-full max-w-md mx-auto px-4 sm:max-w-lg sm:px-6 md:max-w-xl md:px-8 lg:max-w-2xl xl:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 pt-8 sm:pt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-kaushian text-gray-800 mb-4">
            Ucapan Selamat
          </h1>
          <div className="w-48 sm:w-64 md:w-80 lg:w-96 h-[1px] bg-gray-800 mx-auto"></div>
          <p className="text-sm sm:text-base md:text-lg font-niramitmedium text-gray-800 mt-4 sm:mt-6 md:mt-8 px-4 max-w-2xl mx-auto">
            Silakan memberikan ucapan selamat kepada kedua mempelai
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <div>
            <input
              type="text"
              placeholder="Nama anda..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white/70 border border-orange-200 rounded-lg text-gray-700 font-niramit placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-sm sm:text-base md:text-lg"
              required
            />
          </div>

          <div>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value as "hadir" | "tidak")}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white/70 border border-orange-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent font-niramit text-sm sm:text-base md:text-lg"
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
              className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white/70 border border-orange-200 rounded-lg text-gray-700 placeholder-gray-500 font-niramit resize-none focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-sm sm:text-base md:text-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            className="w-full font-niramit bg-orange-200 hover:bg-orange-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-700 font-medium py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base md:text-lg"
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
        </form>

        {/* Comments Section */}
        {comments.length > 0 && (
          <div className="space-y-4 sm:space-y-6 pb-8 sm:pb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 font-niramit mb-4 sm:mb-6">
              Ucapan Selamat ({comments.length})
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {displayedComments.map((comment) => (
                <div key={comment.id} className="bg-orange-200/60 rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-niramitmedium text-gray-800 text-sm sm:text-base">
                        {comment.name}
                      </h3>
                      <span className={`text-xs sm:text-sm px-2 py-1 rounded-full whitespace-nowrap ${
                        comment.attendance === "hadir" 
                          ? "bg-green-100 font-niramitmedium text-green-700" 
                          : "bg-red-100 text-red-700"
                        }`}>
                        {comment.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-niramit text-gray-500 whitespace-nowrap">
                      {formatDate(comment.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-700 font-niramit text-sm sm:text-base leading-relaxed break-words">
                    {comment.message}
                  </p>
                </div>
              ))}
            </div>

            {comments.length > 3 && (
              <button 
                onClick={() => setShowAll(!showAll)} 
                className="w-full bg-white/50 hover:bg-white/70 text-gray-700 font-medium py-3 sm:py-4 px-4 rounded-lg border border-orange-200 transition-colors duration-200 text-sm sm:text-base md:text-lg"
              >
                {showAll ? "Sembunyikan" : `Lihat Semua (${comments.length - 3} lainnya)`}
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {comments.length === 0 && (
          <div className="text-center py-8 sm:py-12 pb-8 sm:pb-12">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-niramit px-4 max-w-md mx-auto">
              Belum ada ucapan selamat. Jadilah yang pertama!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;