import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "#0a0a0a",
                    padding: "80px",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 24,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "#a3a3a3",
                    }}
                >
                    Webentwickler in Stralsund
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 180,
                            fontWeight: 900,
                            lineHeight: 0.9,
                            letterSpacing: "-0.04em",
                            textTransform: "uppercase",
                            color: "#f5f5f5",
                        }}
                    >
                        Zennkoa
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 32,
                            fontSize: 36,
                            color: "#d4d4d4",
                        }}
                    >
                        John Delenschke
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        fontSize: 24,
                        color: "#a3a3a3",
                    }}
                >
                    <span style={{ display: "flex" }}>zennkoa.de</span>
                    <div
                        style={{
                            display: "flex",
                            width: 28,
                            height: 28,
                            backgroundColor: "#3b5bdb",
                            transform: "rotate(45deg)",
                        }}
                    />
                </div>
            </div>
        ),
        { ...ogSize }
    );
}
