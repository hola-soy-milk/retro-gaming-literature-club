import { useEffect, useState } from 'preact/hooks';

export default function DiscordBtn() {
  const [memberCount, setMemberCount] = useState(0);
  useEffect(() => {
    const loadDiscordCount = async () => {
      const response = await fetch(
        'https://discord.com/api/v9/invites/dmuXS3X8nB?with_counts=true',
      );
      const data = await response.json();
      setMemberCount(data.approximate_member_count);
    };
    loadDiscordCount();
  }, []);

  return (
    <a href="https://discord.gg/jAbVkyGDRR" target="_blank" className="button">
      Join our Discord! ({memberCount} members and counting)
    </a>
  );
}
