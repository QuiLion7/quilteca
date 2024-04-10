"use client";
import Link from "next/link";
import {
  User,
  LogOut,
  Loader,
  Lock,
  FileCheck,
  ListChecks,
  UserCog,
  UserRoundPlus,
  CopyPlus,
  Fingerprint,
  SearchCheck,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header className="flex w-full flex-col items-center justify-center bg-primary shadow-sm">
      <div className="flex h-14 w-full items-center justify-between px-2 2xl:container">
        <Link href="/">
          <h1 className="text-sm font-bold duration-300 hover:tracking-widest md:text-lg lg:text-xl xl:text-3xl">
            QUIL
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              TECA
            </span>
          </h1>
        </Link>

        {status === "loading" && (
          <button className="animate-spin rounded-full p-2 hover:bg-secondary">
            <Loader />
          </button>
        )}

        {status === "unauthenticated" && (
          <button
            onClick={handleLogin}
            className="rounded-full p-2 duration-300 hover:bg-secondary"
          >
            <Lock />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-center justify-center gap-1">
            <Link
              href="/"
              className="rounded-full p-1 duration-300 hover:scale-110"
            ></Link>

            <button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="rounded-full hover:bg-inherit"
                    size="icon"
                  >
                    {data.user.image && (
                      <Avatar className="h-9 w-9 duration-300 hover:scale-110">
                        <AvatarImage src={data.user.image} alt="Image User" />
                        <AvatarFallback>QL</AvatarFallback>
                      </Avatar>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel className="flex flex-row items-center justify-between ">
                    {data.user.name}
                    <User size={16} />
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <Link href="/search">
                      <DropdownMenuItem>
                        Buscar Item
                        <DropdownMenuShortcut>
                          <SearchCheck size={16} />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <Link href="/register">
                      <DropdownMenuItem>
                        Adicionar Item
                        <DropdownMenuShortcut>
                          <CopyPlus size={16} />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/author">
                      <DropdownMenuItem>
                        Adicionar Autor
                        <DropdownMenuShortcut>
                          <Fingerprint size={16} />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <Link href="/myitems">
                      <DropdownMenuItem>
                        Meus Itens
                        <DropdownMenuShortcut>
                          <FileCheck size={16} />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      Minhas Listas
                      <DropdownMenuShortcut>
                        <ListChecks size={16} />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Perfil
                      <DropdownMenuShortcut>
                        <UserCog size={16} />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleLogout}>
                      Log out
                      <DropdownMenuShortcut>
                        <LogOut size={16} />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
