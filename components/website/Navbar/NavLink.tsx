import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/dist/client/router";

export default function NavbarLink({ href, name }) {
  let isActive = false;
  const { pathname } = useRouter();

  if (href !== "/") {
    const [, group] = href.split("/");
    isActive = pathname.includes(group);
  } else {
    if (href === pathname) {
      isActive = true;
    }
  }

  return (
    <>
      <NextLink href={href} passHref>
        <Link href={href} tabIndex={-1}>
          <Button
            aria-current={isActive ? "page" : undefined}
            variant={isActive ? "solid" : "ghost"}
          >
            {name}
          </Button>
        </Link>
      </NextLink>
    </>
  );
}
