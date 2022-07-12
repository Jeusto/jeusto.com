import prism from "@/styles/prism";
import Seo from "@/components/Seo";
import { Post } from "@/types/post";

interface BlogProps {
  children: React.ReactNode;
  metadata?: Post;
}

export default function Blog({ children, metadata }: BlogProps) {
  return (
    <div>
      <Seo {...metadata} />
      <main className="post">{children}</main>

      <style jsx global>
        {prism}
      </style>
    </div>
  );
}
