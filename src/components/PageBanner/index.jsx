"use client";

import useDeviceType from "@/hooks/useDeviceType";
import Title from "../Title";

const PageBanner = ({ src, label, alt }) => {
  const { isTablet } = useDeviceType();

  return (
    <div style={{ position: "relative", width: "100%", maxHeight: "300px" }}>
      <img
        style={{ objectFit: "cover", width: "100%", height: "300px" }}
        src={src}
        alt={alt}
      />

      <div
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(100, 179, 218, 0.3))",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      {label && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: isTablet ? 0 : "40px",
            fontWeight: 600,
            fontSize: "40px",
            color: "#16243d",
            textTransform: "uppercase",
          }}
        >
          <Title title={label} />
        </div>
      )}
    </div>
  );
};
export default PageBanner;
