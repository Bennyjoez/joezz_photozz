interface profileHeroProps {
  name: string,
  email: string,
  contact: string,
  handleLogout: () => void
}

export function ProfileHero({
  name,
  email,
  contact,
  handleLogout
}: profileHeroProps) {
  return (
    <div className="bg">
      <p>Hello, {name.toUpperCase()}</p>
      <p>Email: {email}</p>
      <p>Contact: {contact}</p>
      <button id="logout" className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
