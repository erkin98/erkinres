export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        padding: "14px clamp(16px,3vw,28px)",
        borderTop: "1px solid rgba(148,168,190,.14)",
        background: "rgba(10,14,19,.92)",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>© 2026 erkin.qarayev</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2dd4c8" }}>exit_code=0</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>
        next.js · react 19 · typescript
      </span>
    </footer>
  )
}
