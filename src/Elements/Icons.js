import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  display: inline-block;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`;

function Icons(props = {}) {
  switch (props.icon) {
    case "logo":
      return (
        <SVG
          width="1491"
          height="1491"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1491 1491"
          {...props}
        >
          <path d="M157.576 1454.368h62.88c0-50.577 40.82-91.579 91.175-91.579a81.428 81.428 0 0 1 33.012 6.316l26.724 11.053 12.576-26.842c14.933-27.964 43.863-45.52 75.455-45.79 44.233-.07 80.812 34.59 83.315 78.948l3.144 42.631 39.3-14.21 22.008-3.158c36.464 0 66.024 29.69 66.024 66.316v3.158h62.88v-4.737c0-71.507-57.713-129.474-128.904-129.474h-7.86c-19.259-61.27-75.94-102.85-139.907-102.632-45.857-.38-89.116 21.345-116.327 58.421l-31.44-3.157a117.423 117.423 0 0 0-40.872 6.315c-20.576-59.169-75.938-98.978-138.335-99.473C76.627 1205.478 25.24 1236.817.377 1287l56.592 28.421c14.394-28.473 43.666-46.237 75.455-45.79 38.587-.131 72.01 26.857 80.172 64.737-34.75 30.13-54.814 73.892-55.02 120zm1186.852-97.894c44.233-.072 80.811 34.59 83.315 78.947l62.88-3.158c-4.181-78-68.426-139.06-146.195-138.947-36.514.046-71.746 13.527-99.036 37.895-30.837-50.434-85.7-80.982-144.623-80.527-70.963.305-134.538 44.127-160.342 110.527-62.152 7.503-115.54 47.872-139.907 105.789l58.163 23.684c17.208-41.344 57.566-68.161 102.18-67.895h28.295l4.716-25.263c9.218-57.256 61.48-97.221 118.882-90.908 57.402 6.312 99.816 56.689 96.48 114.593a101.465 101.465 0 0 1-4.715 31.578l59.735 20.527a136.337 136.337 0 0 0 7.86-50.527c.257-7.927-.27-15.86-1.572-23.684 14.724-26.999 43.247-43.456 73.884-42.631zM747.072 628.579c68.587 0 124.187-55.847 124.187-124.737 0-68.89-55.6-124.737-124.187-124.737-68.587 0-124.187 55.847-124.187 124.737 0 33.082 13.084 64.81 36.373 88.202 23.29 23.393 54.878 36.535 87.814 36.535zm0-186.316c33.86 0 61.308 27.57 61.308 61.58 0 34.008-27.449 61.578-61.308 61.578-33.86 0-61.308-27.57-61.308-61.579s27.449-61.579 61.308-61.579z" />
          <path d="M1088.194 939.632l20.435-23.685c42.059-45.468 64.235-105.962 61.577-167.969-2.658-62.007-29.93-120.362-75.724-162.03a265.455 265.455 0 0 0-95.892-58.422c-6.288-186.315-83.315-360-229.51-505.263L747.072.158l-22.008 22.105C578.87 167.526 501.842 341.211 495.554 527.526a248.2 248.2 0 0 0-94.32 58.421c-46.013 41.45-73.577 99.689-76.531 161.7-2.954 62.011 18.948 122.627 60.812 168.3l20.435 23.685 136.763-123.158a744.96 744.96 0 0 0 83.316 165.79c23.58 34.736 80.171 48.947 127.33 48.947h1.573c25.152 0 83.315-4.737 108.467-39.474a831.956 831.956 0 0 0 88.032-175.263l136.763 123.158zm18.863-187.895a169.522 169.522 0 0 1-25.151 96.316l-103.752-93.158h3.144l-7.86-9.474c4.716-15.79 7.86-30 11.004-45.79a784.881 784.881 0 0 0 12.576-104.21 331.716 331.716 0 0 1 55.02 39.474c32.622 30.387 52.328 72.235 55.02 116.842zM747.072 90.157a782.683 782.683 0 0 1 84.887 108.948 211.361 211.361 0 0 1-169.774 0 782.683 782.683 0 0 1 84.887-108.947zM630.745 254.369a275.64 275.64 0 0 0 116.327 25.264 270.943 270.943 0 0 0 116.327-25.264C931.377 387.666 952.432 540.152 923.135 687c-3.144 11.053-4.716 22.105-7.86 34.737-102.924 64.562-233.482 64.562-336.406 0-1.572-11.053-4.716-22.105-6.288-33.158-32.12-147.1-11.523-300.868 58.164-434.21zM442.106 633.316a331.716 331.716 0 0 1 55.02-39.474 627.878 627.878 0 0 0 14.148 107.369 207.624 207.624 0 0 0 9.432 42.631l-6.288 9.474h1.572l-103.752 93.158c-40.364-69.432-28.008-157.614 29.868-213.158zM811.524 955.42a115.887 115.887 0 0 1-67.596 12.632c-37.728-3.158-61.308-14.21-66.024-20.527a711.71 711.71 0 0 1-72.311-142.105 366.35 366.35 0 0 0 282.958 0 795.504 795.504 0 0 1-77.027 150z" />
          <path d="M715.632 1116.474H778.512V1282.895H715.632z" />
          <path d="M861.827 1072.263H924.707V1209.158H861.827z" />
          <path d="M569.437 1072.263H632.317V1209.158H569.437z" />
        </SVG>
      );

    case "email":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </SVG>
      );

    case "lock":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </SVG>
      );

    case "user":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
        </SVG>
      );

    case "trash":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
        </SVG>
      );

    case "power":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"
          />
        </SVG>
      );

    case "window":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z" />
        </SVG>
      );

    case "window-new":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z" />
        </SVG>
      );

    case "chevron-right":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </SVG>
      );

    case "document-add":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zm-5 8h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z" />
        </SVG>
      );

    case "close":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </SVG>
      );

    case "url":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
        </SVG>
      );

    case "clipboard":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </SVG>
      );

    case "information":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </SVG>
      );

    case "bounce-rate":
      return (
        <SVG
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g fill="none" fillRule="evenodd">
            <rect fill="#FBF1F1" width="64" height="64" rx="18" />
            <path
              d="M21.985 39.8c0-7.127-4.873-15.508-10.339-15.508a.646.646 0 0 1 0-1.292c5.127 0 9.538 5.87 11.062 12.2 1.292-4.146 4.187-7.677 7.677-7.677 3.73 0 6.779 4.032 7.919 8.539.941-2.262 2.595-4.222 4.39-4.597a5.17 5.17 0 1 1 .021 1.328c-1.948.644-3.93 4.25-3.93 7.007a.646.646 0 1 1-1.293 0c0-5.113-3.273-10.985-7.107-10.985-3.835 0-7.108 5.872-7.108 10.985a.646.646 0 1 1-1.292 0zm25.846-3.877a3.877 3.877 0 1 0 0-7.754 3.877 3.877 0 0 0 0 7.754z"
              fill="#DD7373"
              fillRule="nonzero"
            />
          </g>
        </SVG>
      );

    case "pagespeed":
      return (
        <SVG
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g fill="none" fillRule="evenodd">
            <rect fill="#E5EDFE" width="64" height="64" rx="18" />
            <g transform="translate(12 12)">
              <path d="M24.395 29.616h-8.083c-.295 0-.472.177-.472.412v1.83c0 .235.177.413.472.413h8.083a.404.404 0 0 0 .413-.414v-1.829a.403.403 0 0 0-.413-.412zm-5.842 1.77h-.942c-.237 0-.414-.177-.414-.474 0-.235.177-.411.414-.411h.942c.238 0 .414.176.414.411 0 .297-.176.474-.414.474zm2.243 0h-.885c-.295 0-.472-.177-.472-.474 0-.235.177-.411.472-.411h.885c.236 0 .413.176.413.411 0 .297-.177.474-.413.474zm2.24 0h-.883c-.296 0-.473-.177-.473-.474 0-.235.177-.411.473-.411h.884c.236 0 .472.176.472.411a.466.466 0 0 1-.472.474z" />
              <path d="M34.306 19.174h2.713c-.118-1.888-.53-3.777-1.18-5.426l-2.477 1-.354-.707 2.536-1.062c-1.77-3.833-4.897-6.96-8.79-8.614l-1.003 2.48-.708-.297 1.002-2.477c-1.65-.649-3.421-1.003-5.25-1.121v2.714h-1.593V2.95a18.623 18.623 0 0 0-5.427 1.18l1.062 2.476-.768.357-1.003-2.54c-1.71.769-3.185 1.77-4.542 2.952l1.947 1.947-1.121 1.06-1.888-1.888a16.69 16.69 0 0 0-3.067 4.72l2.536 1.004-.294.707L4.1 13.923a15.724 15.724 0 0 0-1.063 5.25h2.655v1.593H3.037c.059 1.889.472 3.718 1.12 5.426l2.539-1.06.295.767-2.537 1.004c.766 1.709 1.77 3.185 3.008 4.541l1.888-1.946 1.121 1.119-1.947 1.889c3.068 2.772 7.08 4.484 11.504 4.484 4.366 0 8.377-1.712 11.444-4.484l-1.888-1.89 1.062-1.118 1.888 1.946a16.706 16.706 0 0 0 3.069-4.719l-2.478-1.004.295-.707 2.477 1.002c.65-1.65 1.003-3.421 1.121-5.25h-2.713v-1.592zm-8.554 12.683c0 .708-.65 1.299-1.357 1.299h-8.083c-.766 0-1.357-.592-1.357-1.299v-1.829c0-.707.59-1.357 1.357-1.357h8.083c.707 0 1.357.65 1.357 1.357v1.83zM21.209 21.24c-.413.293-.885.53-1.475.589-1.651.236-3.185-.943-3.422-2.596a3.072 3.072 0 0 1 6.077-.884c.059.59 0 1.12-.235 1.652l9.438 8.022-10.383-6.783z" />
              <path
                d="M24.395 28.67h-8.083c-.766 0-1.357.65-1.357 1.358v1.83c0 .707.59 1.298 1.357 1.298h8.083c.707 0 1.357-.592 1.357-1.299v-1.829c0-.707-.65-1.357-1.357-1.357zm.413 3.187a.404.404 0 0 1-.413.414h-8.083c-.295 0-.472-.178-.472-.414v-1.829c0-.235.177-.412.472-.412h8.083c.235 0 .413.177.413.412v1.83z"
                fill="#034EFD"
                fillRule="nonzero"
              />
              <path
                d="M20.029 0C8.997 0 .03 8.97.03 20c0 11.032 8.966 20 19.998 20 10.973 0 19.94-8.968 19.94-20 0-11.03-8.967-20-19.94-20zm15.869 26.016l-2.477-1.002-.295.708 2.478 1.004a16.706 16.706 0 0 1-3.069 4.719l-1.888-1.947-1.062 1.12 1.888 1.888c-3.067 2.773-7.078 4.484-11.444 4.484-4.424 0-8.437-1.711-11.504-4.484l1.947-1.889-1.121-1.119-1.888 1.947c-1.239-1.357-2.242-2.833-3.008-4.542L6.992 25.9l-.296-.767-2.537 1.06c-.648-1.708-1.062-3.537-1.121-5.425h2.655v-1.593H3.038c.059-1.83.413-3.598 1.062-5.25l2.538 1.002.294-.708-2.536-1.004a16.69 16.69 0 0 1 3.067-4.72l1.888 1.888 1.121-1.06-1.947-1.946c1.357-1.182 2.831-2.184 4.542-2.952l1.003 2.54.768-.357-1.062-2.477a18.626 18.626 0 0 1 5.427-1.18v2.714h1.593V2.95c1.828.119 3.599.473 5.25 1.121L25.044 6.55l.708.296 1.003-2.48c3.893 1.653 7.02 4.781 8.79 8.614l-2.536 1.063.354.707 2.477-1.001c.65 1.65 1.062 3.539 1.18 5.426h-2.713v1.593h2.713c-.12 1.829-.472 3.6-1.122 5.25z"
                fill="#034EFD"
                fillRule="nonzero"
              />
              <path
                d="M22.389 18.348a3.072 3.072 0 0 0-6.077.885c.236 1.652 1.77 2.831 3.421 2.595.59-.059 1.062-.295 1.476-.589l10.383 6.783L22.153 20c.236-.532.295-1.063.236-1.652zm.648 12.152h-.884c-.296 0-.473.177-.473.412 0 .296.177.474.473.474h.884a.466.466 0 0 0 .472-.474c0-.235-.235-.412-.472-.412zm-4.484 0h-.942a.402.402 0 0 0-.414.412c0 .296.177.474.414.474h.942c.238 0 .414-.178.414-.474a.402.402 0 0 0-.414-.412zm2.243 0h-.885c-.295 0-.472.177-.472.412 0 .296.177.474.472.474h.885c.236 0 .413-.178.413-.474a.403.403 0 0 0-.413-.412z"
                fill="#034EFD"
                fillRule="nonzero"
              />
            </g>
          </g>
        </SVG>
      );
    case "seo":
      return (
        <SVG
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g fill="none" fillRule="evenodd">
            <rect fill="#EBEAEF" width="64" height="64" rx="18" />
            <g transform="translate(13 14)" fillRule="nonzero" fill="#3B3561">
              <path d="M26.76 11.94c1.02 0 1.8-.78 1.8-1.8s-.78-1.8-1.8-1.8-1.8.78-1.8 1.8.84 1.8 1.8 1.8zm0-2.76c.54 0 .96.42.96.96s-.42.96-.96.96-.96-.42-.96-.96.48-.96.96-.96z" />
              <path d="M37.32 6.12H6.78c-.78 0-1.44.66-1.44 1.44v26.88c0 .78.66 1.44 1.44 1.44h30.48c.78 0 1.44-.66 1.44-1.44V7.56c.06-.84-.6-1.44-1.38-1.44zm.6 28.32c0 .36-.3.6-.6.6H6.78c-.36 0-.6-.3-.6-.6V7.56c0-.36.3-.6.6-.6h30.48c.36 0 .6.3.6.6v26.88h.06z" />
              <path d="M36.24 13.32H7.86a.41.41 0 0 0-.42.42v19.62c0 .24.18.42.42.42H36.3c.24 0 .42-.18.42-.42V13.74c-.06-.24-.24-.42-.48-.42zM35.82 33H8.22V14.16h27.6V33zm-4.98-21.06c1.02 0 1.8-.78 1.8-1.8s-.78-1.8-1.8-1.8-1.8.78-1.8 1.8.78 1.8 1.8 1.8zm0-2.76c.54 0 .96.42.96.96s-.42.96-.96.96-.96-.42-.96-.96.42-.96.96-.96zm4.02-.84c-1.02 0-1.8.78-1.8 1.8s.78 1.8 1.8 1.8c.96 0 1.8-.78 1.8-1.8s-.78-1.8-1.8-1.8zm0 2.76c-.54 0-.96-.42-.96-.96s.42-.96.96-.96.96.42.96.96-.42.96-.96.96z" />
              <path d="M10.92 30.42h5.7c.24 0 .42-.18.42-.42v-3.36a.41.41 0 0 0-.42-.42H14.7v-1.2a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.62c0 .24.18.42.42.42h1.92v2.52h-4.86v-2.52h1.92c.24 0 .42-.18.42-.42v-3h7.86c.24 0 .42-.18.42-.42V21a.41.41 0 0 0-.42-.42h-1.92v-2.52h4.86v2.52h-1.92a.41.41 0 0 0-.42.42v2.22c0 .24.18.42.42.42h7.86v3c0 .24.18.42.42.42h1.86v2.52h-4.86v-2.52h1.92c.24 0 .42-.18.42-.42v-1.62a.41.41 0 0 0-.42-.42c-.24 0-.36.18-.36.42v1.2h-1.92a.41.41 0 0 0-.42.42V30c0 .24.18.42.42.42h5.7c.24 0 .42-.18.42-.42v-3.36a.41.41 0 0 0-.42-.42h-1.86v-3c0-.24-.24-.42-.48-.42h-7.86v-1.38h1.92c.24 0 .42-.18.42-.42v-3.36a.41.41 0 0 0-.42-.42h-5.7a.41.41 0 0 0-.42.42V21c0 .24.18.42.42.42h1.92v1.38h-7.86a.41.41 0 0 0-.42.42v3h-1.92a.41.41 0 0 0-.42.42V30c0 .18.24.42.42.42z" />
              <path d="M24.9 26.22h-1.92v-1.2a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.62c0 .24.18.42.42.42h1.92v2.52h-4.86v-2.52h1.92c.24 0 .42-.18.42-.42v-1.62a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.2H19.2a.41.41 0 0 0-.42.42V30c0 .24.18.42.42.42h5.7c.24 0 .42-.18.42-.42v-3.36a.41.41 0 0 0-.42-.42zM12.36 1.14h1.5c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zm3.78 0h1.5c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zm3.84 0h1.5c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zm-11.46 0h1.5c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zm-7.56.3c.12 0 .24-.06.3-.12.12-.12.24-.18.42-.18h.72c.24 0 .42-.18.42-.42A.41.41 0 0 0 2.4.3h-.72C1.32.3.96.42.66.72c-.18.18-.18.42 0 .6.12.12.24.12.3.12zm30.42-.3h.84c.12 0 .3.06.36.12s.18.12.24.12c.12 0 .24-.06.3-.18.12-.18.12-.42-.06-.6-.24-.24-.6-.36-.9-.36h-.84a.41.41 0 0 0-.42.42c0 .24.24.48.48.48zm1.44 2.04v1.5c0 .24.18.42.42.42s.42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42zM.66 5.16c.24 0 .42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42zm23.1-4.02h1.5c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zm3.84 0h1.5c.24 0 .42-.18.42-.42A.41.41 0 0 0 29.1.3h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zM2.88 29.28H1.74c-.06 0-.12 0-.24-.06-.24-.06-.48 0-.54.24-.06.24 0 .48.24.54.18.06.36.12.48.12h1.14c.24 0 .42-.18.42-.42s-.12-.42-.36-.42zM.66 24.24c.24 0 .42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42zm.42 3.36v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42s.42-.18.42-.42zM6.66.72A.41.41 0 0 0 6.24.3h-1.5a.41.41 0 0 0-.42.42c0 .24.18.42.42.42h1.5c.24 0 .42-.18.42-.42zm-6 12.06c.24 0 .42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42zm0 7.62c.24 0 .42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42zM.66 9c.24 0 .42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42zm0 7.62c.24 0 .42-.18.42-.42v-1.5a.41.41 0 0 0-.42-.42.41.41 0 0 0-.42.42v1.5c0 .24.18.42.42.42zm7.38-6.06h2.52c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42H8.04a.41.41 0 0 0-.42.42c0 .24.18.42.42.42zm4.44 0h11.46c.24 0 .42-.18.42-.42a.41.41 0 0 0-.42-.42H12.48a.41.41 0 0 0-.42.42c0 .24.18.42.42.42z" />
            </g>
          </g>
        </SVG>
      );
    case "conversions":
      return (
        <SVG
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g fill="none" fillRule="evenodd">
            <rect fill="#E5F1F1" width="64" height="64" rx="18" />
            <path
              d="M18.875 15a1.819 1.819 0 0 0-1.406.683c-.304.4-.422.855-.457 1.303-.069.897.158 1.809.63 2.52a.796.796 0 0 0 .012.025L28.1 34.055v9.52a.799.799 0 0 0 .013.05c.032.512.243.75.48 1.068.238.317.547.652.901 1.005a26.949 26.949 0 0 0 2.529 2.185c.91.698 1.804 1.31 2.54 1.688.369.19.672.333 1.074.373.2.02.48.026.765-.186.272-.205.382-.582.382-.832V34.055L47.233 19.53c.551-.77.659-1.732.493-2.62-.083-.443-.24-.885-.543-1.253A1.818 1.818 0 0 0 45.826 15H18.875zm23.818 4.283a.79.79 0 0 1 .776.456.799.799 0 0 1-.097.835l-7.13 9.533a.79.79 0 0 1-1.108.16.802.802 0 0 1-.162-1.116l7.13-9.533a.788.788 0 0 1 .591-.335z"
              fill="#51A3A3"
            />
          </g>
        </SVG>
      );

    case "notification":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" />
        </SVG>
      );

    default:
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
        </SVG>
      );
  }
}

Icons.defaultProps = {
  size: 20
};

Icons.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number.isRequired
};

export default Icons;
