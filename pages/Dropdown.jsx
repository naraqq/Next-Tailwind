import Link from "next/Link";
import { useState } from "react";

function Dropdown() {
  const [toggle, setToggle] = useState(false);
  const sideBar = () => {
    setToggle(!toggle);
    console.log(toggle);
    console.log("clicked");
  };
  return (
    <div className="h-20 bg-white rounded-full flex px-20 fixed w-full justify-between top-5">
      <div className="h-20 flex items-center">
        <svg
          height="25"
          width="100"
          fill="black"
          viewBox="0 0 240 60"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <g fill="none">
            <path
              d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z"
              fill="black"
            ></path>
            <path
              d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986"
              fill="#097eff"
            ></path>
            <path
              d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985"
              fill="#097eff"
            ></path>
            <path
              d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985"
              fill="#ecb12f"
            ></path>
            <path
              d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985"
              fill="#ecb12f"
            ></path>
          </g>
        </svg>
      </div>
      <div className="h-20 lg:flex items-center justify-between gap-5 hidden">
        <div class="group inline-block relative">
          <button class=" py-2 px-4 rounded inline-flex items-center">
            <Link href="/Product" replace>
              <a className="text-black text-sm font-medium">Product</a>
            </Link>
            <svg
              className="h-4 w-4"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul class="absolute hidden w-52 text-gray-700 pt-1 group-hover:block">
            <li class="">
              <a
                class="rounded-t bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Features
              </a>
            </li>
            <li class="">
              <a
                class="bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Channels
              </a>
            </li>
            <li class="">
              <a
                class=" bg-gray-200 hover:bg-cyan-900 hover:text-whitepy-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Digital HQ
              </a>
            </li>
            <li class="">
              <a
                class=" bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Intigrations
              </a>
            </li>
            <li class="">
              <a
                class=" bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Security
              </a>
            </li>
            <li class="">
              <a
                class=" bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Slack Content
              </a>
            </li>
            <li class="">
              <a
                class="bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Customers
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b bg-gray-200 hover:bg-cyan-900 hover:text-white py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Download Slack
              </a>
            </li>
          </ul>
        </div>
        <Link href="/Solutions">
          <a className="text-black text-sm font-medium">Solutions</a>
        </Link>
        <Link href="/Enterprise">
          <a className="text-black text-sm font-medium">Enterprise</a>
        </Link>
        <Link href="/Sources">
          <a className="text-black text-sm font-medium">Sources</a>
        </Link>
        <Link href="/Pricing">
          <a className="text-black text-sm font-medium">Pricing</a>
        </Link>
      </div>
      <div className="flex gap-5">
        <div className="h-20 flex items-center">
          <svg width="20" height="20">
            <path
              d="m18.78 17.72c.1467.1467.22.3233.22.53 0 .2133-.0733.39-.22.53-.16.1467-.3367.22-.53.22-.2067 0-.3833-.0733-.53-.22l-4.47-4.47c-.6667.54-1.4067.9567-2.22 1.25-.8067.2933-1.65.44-2.53.44-1.36 0-2.61333-.3367-3.76-1.01s-2.05667-1.5833-2.73-2.73-1.01-2.4-1.01-3.76.33667-2.61333 1.01-3.76 1.58333-2.05667 2.73-2.73 2.4-1.01 3.76-1.01 2.6133.33667 3.76 1.01 2.0567 1.58333 2.73 2.73 1.01 2.4 1.01 3.76c0 .88-.1467 1.7267-.44 2.54-.2933.8067-.71 1.5433-1.25 2.21zm-10.28-3.22c1.08667 0 2.0867-.27 3-.81.92-.54 1.65-1.2667 2.19-2.18.54-.92.81-1.92333.81-3.01s-.27-2.08667-.81-3c-.54-.92-1.27-1.65-2.19-2.19-.9133-.54-1.91333-.81-3-.81s-2.09.27-3.01.81c-.91333.54-1.64 1.27-2.18 2.19-.54.91333-.81 1.91333-.81 3s.27 2.09.81 3.01c.54.9133 1.26667 1.64 2.18 2.18.92.54 1.92333.81 3.01.81z"
              stroke="black"
              fill="black"
            ></path>
          </svg>
        </div>
        <div className="h-20 flex items-center mr-5 lg:hidden">
          <svg onClick={sideBar} width="18" height="12" fill="black">
            <path
              d="M1.52 2C1.22667 2 0.983333 1.90667 0.79 1.72C0.596667 1.52667 0.5 1.28667 0.5 1C0.5 0.713334 0.596667 0.476667 0.79 0.290001C0.983333 0.0966671 1.22667 0 1.52 0H16.48C16.7733 0 17.0167 0.0966671 17.21 0.290001C17.4033 0.476667 17.5 0.713334 17.5 1C17.5 1.28667 17.4033 1.52667 17.21 1.72C17.0167 1.90667 16.7733 2 16.48 2H1.52ZM1.52 7C1.22667 7 0.983333 6.90667 0.79 6.72C0.596667 6.52667 0.5 6.28667 0.5 6C0.5 5.71333 0.596667 5.47667 0.79 5.29C0.983333 5.09667 1.22667 5 1.52 5H16.48C16.7733 5 17.0167 5.09667 17.21 5.29C17.4033 5.47667 17.5 5.71333 17.5 6C17.5 6.28667 17.4033 6.52667 17.21 6.72C17.0167 6.90667 16.7733 7 16.48 7H1.52ZM1.52 12C1.22667 12 0.983333 11.9067 0.79 11.72C0.596667 11.5267 0.5 11.2867 0.5 11C0.5 10.7133 0.596667 10.4767 0.79 10.29C0.983333 10.0967 1.22667 10 1.52 10H16.48C16.7733 10 17.0167 10.0967 17.21 10.29C17.4033 10.4767 17.5 10.7133 17.5 11C17.5 11.2867 17.4033 11.5267 17.21 11.72C17.0167 11.9067 16.7733 12 16.48 12H1.52Z"
              fill="#000"
            ></path>
          </svg>
        </div>
        <div className="text-black text-base font-medium h-20 lg:flex items-center mr-5 hidden">
          Sign in
        </div>
        <div className="xl:flex items-center hidden">
          <button className="h-10 bg-fuchsia-900 rounded py-2 px-3 font-medium text-sm text-white ml-2 border">
            TALK TO SALES
          </button>
        </div>
        <div className="lg:flex items-center hidden">
          <button className="h-10 bg-white rounded py-2 px-3 font-medium text-sm text-fuchsia-900 ml-2 border">
            TRY FOR FREE
          </button>
        </div>
        <div
          className={
            toggle
              ? "fixed w-screen h-screen bg-white top-0 left-0 p-5 z-50"
              : "hidden"
          }
        >
          <div className="flex justify-between flex-column">
            <div className="">
              <svg
                width="125"
                class="c-slacklogo--color"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 60"
                shape-rendering="geometricPrecision"
              >
                <title>Slack</title>
                <path d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z"></path>
                <path
                  d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986"
                  fill="#097eff"
                ></path>
                <path
                  d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985"
                  fill="#097eff"
                ></path>
                <path
                  d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985"
                  fill="#ecb12f"
                ></path>
                <g>
                  <path
                    d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985"
                    fill="#ecb12f"
                  ></path>
                </g>
              </svg>
            </div>
            <div onClick={sideBar} className="p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close Navigation</title>
                <path
                  d="M7.65636 6.5L12.26 11.1036C12.42 11.2636 12.5 11.4564 12.5 11.6818C12.5 11.9073 12.42 12.1 12.26 12.26C12.1 12.42 11.9073 12.5 11.6818 12.5C11.4564 12.5 11.2636 12.42 11.1036 12.26L6.5 7.65636L1.89636 12.26C1.73636 12.42 1.54364 12.5 1.31818 12.5C1.09273 12.5 0.9 12.42 0.74 12.26C0.58 12.1 0.5 11.9073 0.5 11.6818C0.5 11.4564 0.58 11.2636 0.74 11.1036L5.34364 6.5L0.74 1.89636C0.58 1.73636 0.5 1.54364 0.5 1.31818C0.5 1.09273 0.58 0.899999 0.74 0.739999C0.9 0.58 1.09273 0.5 1.31818 0.5C1.54364 0.5 1.73636 0.58 1.89636 0.739999L6.5 5.34364L11.1036 0.739999C11.2636 0.58 11.4564 0.5 11.6818 0.5C11.9073 0.5 12.1 0.58 12.26 0.739999C12.42 0.899999 12.5 1.09273 12.5 1.31818C12.5 1.54364 12.42 1.73636 12.26 1.89636L7.65636 6.5Z"
                  fill="#1D1C1D"
                  stroke="black"
                  stroke-width="0.5"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full h-full ">
            <p className="text-md font-bold w-full py-5">Product</p>
            <p className="text-md font-bold w-full py-5">Solutions</p>
            <p className="text-md font-bold w-full py-5">Enterprice</p>
            <p className="text-md font-bold w-full py-5">Recources</p>
            <p className="text-md font-bold w-full py-5">Pricing</p>
            <p className="text-md font-bold w-full py-5">Sign in</p>
            <div className="h1/3 w-full mt-20">
              <button className="border border-fuchsia-900 w-full font-semibold py-4 text-sm rounded text-fuchsia-900 my-2">
                SIGN IN
              </button>
              <button className="border bg-fuchsia-900 w-full font-semibold py-4 text-sm rounded text-white my-2">
                DOWNLOAD SLACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
