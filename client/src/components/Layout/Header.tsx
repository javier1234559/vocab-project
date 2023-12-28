
'use client';

import SearchInput from "~/components/UI/SearchInput";
import { Navbar, Link, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import ThemeSwitcher from '~/components/ThemeSwitcher';
import { useState } from "react";
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Profile", href: "/profile" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Settings", href: "/settings" },
    { label: "Log Out", href: "/logout" },
  ];

  return (
    <header>
      <Navbar
        position="static"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full"
                color={
                  item.label === "Log Out" ? "danger" : "foreground"
                }
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <NavbarContent className="pr-3 py-4" justify={isMenuOpen ? "center" : "start"}>
          <NavbarBrand>
          <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex " justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/course">
              Course
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link aria-current="page" href='/flashcard'>
              Flashcard
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="/test" aria-current="page">
              Practice Test
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem >
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button as={Link} href="/login" color="secondary" >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button as={Link} href="/register" >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <SearchInput />
    </header>
  );
};

export default Header;