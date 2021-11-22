import { Logo } from "./components/logo";
import { Button } from "./components/button";

export const App = () => {
  return (
    <div class="background py-20 fill-current min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div class="flex flex-col items-center gap-10">
        <Logo class="text-white fill-current" height="12rem" />
        <p class="text-7xl font-bold text-white">WALDO</p>
        <h2 class="text-gray-300 text-center text-2xl md:text-xl">
          An AI powered anti cheat currently
          <br />
          <span class="font-semibold">under construction</span>
        </h2>
        <div class="flex flex-col md:flex-row gap-10">
          <iframe
            src="https://www.youtube.com/embed/GOI9EkLsUm0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p class="text-gray-200 max-w-sm leading-relaxed">
            <span class="font-semibold">The next generation of anti cheat</span>
            <br />
            With hacks getting more and more advanced, we need a new way of
            detecting them.
            <br />
            We see AI as this new method. By training an AI with real footage
            and footage of cheat assissted gameplay, we can train the AI to
            detect the smallest differences
          </p>
          <div class="flex flex-col items-center gap-5">
            <h3 class="text-gray-100 text-3xl md:text-xl font-bold">
              Want to help?
            </h3>
            <Button
              href="https://discord.com/invite/SgpnrUm"
              class="bg-blue-600 hover:bg-blue-500"
            >
              Discord
            </Button>
            <Button
              href="https://github.com/waldo-vision"
              class="bg-gray-600 hover:bg-gray-500"
            >
              Github
            </Button>
            <Button
              href="https://tsunddev.github.io/waldo-docs/"
              class="bg-fuchsia-700 hover:bg-fuchsia-600"
            >
              Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
