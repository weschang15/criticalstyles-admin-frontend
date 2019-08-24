import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SVG = styled.svg`
  display: block;
`;

function Icons(props = {}) {
  switch (props.icon) {
    case "mobile":
      return (
        <SVG
          width="48"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 64"
          {...props}
        >
          <path d="M34.667 2H13.333C10.388 2 8 4.474 8 7.526v48.948C8 59.526 10.388 62 13.333 62h21.334C37.612 62 40 59.526 40 56.474V7.526C40 4.474 37.612 2 34.667 2zm2.285 54.474c0 1.308-1.023 2.368-2.285 2.368H13.333c-1.262 0-2.285-1.06-2.285-2.368V7.526c0-1.308 1.023-2.368 2.285-2.368h3.048c.42 0 .762.353.762.79 0 1.307 1.023 2.368 2.286 2.368h9.142c1.263 0 2.286-1.06 2.286-2.369 0-.436.341-.79.762-.79h3.048c1.262 0 2.285 1.061 2.285 2.37v48.947z" />
        </SVG>
      );

    case "tablet":
      return (
        <SVG
          width="56"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 64"
          {...props}
        >
          <path d="M48 59.094C48 60.699 46.715 62 45.13 62H10.87C9.285 62 8 60.699 8 59.094V4.906C8 3.301 9.285 2 10.87 2h34.26C46.715 2 48 3.301 48 4.906v54.188zM10.223 8v48h35.554V8H10.223zM28 57.591a1.5 1.5 0 0 0-1.49 1.51A1.5 1.5 0 0 0 28 60.608a1.5 1.5 0 0 0 1.49-1.509A1.5 1.5 0 0 0 28 57.591zM27.996 5.64c.135 0 .26-.074.328-.193a.388.388 0 0 0 0-.384.379.379 0 0 0-.708.193c0 .212.17.384.38.384z" />
        </SVG>
      );

    case "desktop":
      return (
        <SVG
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          {...props}
        >
          <path d="M53.687 11H10.313C8.506 11 7 12.603 7 14.526v29.487c0 1.923 1.506 3.525 3.313 3.525h17.711c-.18 1.475-.723 3.206-2.65 3.206h-2.41c-.482 0-.904.448-.904.961 0 .513.422.962.904.962h18.072c.482 0 .904-.45.904-.962 0-.513-.422-.961-.904-.961h-2.41c-1.927 0-2.53-1.731-2.65-3.206h17.71c1.808 0 3.314-1.602 3.314-3.525V14.526C57 12.603 55.494 11 53.687 11zm-43.374 1.923h43.374c.843 0 1.506.705 1.506 1.603v26.602H8.807V14.526c0-.898.663-1.603 1.506-1.603zm24.82 37.82h-6.266c.543-.833.844-1.922.964-3.205h4.338c.12 1.283.421 2.372.964 3.206zm18.554-5.128H10.313c-.843 0-1.506-.705-1.506-1.602v-.962h46.386v.962c0 .897-.663 1.602-1.506 1.602z" />
        </SVG>
      );

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

    default:
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
          <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
        </SVG>
      );
  }
}

Icons.propTypes = {
  icon: PropTypes.string
};

export default Icons;
