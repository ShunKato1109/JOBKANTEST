import React, { useState, useEffect } from 'react';

export const Clock = () => {
  // 現在時刻の状態を管理します
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1秒ごとに現在時刻を更新するタイマーを設定します
    const timerId = setInterval(
      () => setCurrentTime(new Date()),
    );

    // コンポーネントのクリーンアップ時にタイマーをクリアします
    return () => clearInterval(timerId);
  }, []);

  // 時刻を00:00:00の形式にフォーマットする関数です
  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {formatTime(currentTime)}
    </div>
  );
};

// export default Clock;
