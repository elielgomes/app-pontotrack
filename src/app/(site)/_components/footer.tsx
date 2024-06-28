import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border relative">
      <div className="border-t border-border py-8 text-sm">
        <div className="container max-w-screen-xl flex flex-col md:flex-row text-center md:text-left justify-between text-muted-foreground">
          <p className="mb-8 md:mb-0">
            &copy; {new Date().getFullYear()} AppTrack. Todos os direitos
            reservados.
          </p>
          <a
            href="https://github.com/elielgomes"
            target="_blank"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            by Eliel Gomes
          </a>
        </div>
      </div>
    </footer>
  );
};
