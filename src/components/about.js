import React from "react"
import * as styles from "../styles/components/about.module.scss"

export default function About() {
  return (
    <div className={styles.container}>
      <h2>Controls</h2>
      <ul className={styles.rules}>
        <li>X: Open/Close Memo</li>
        <li>Space or Enter: Flip Tile</li>
        <li>0 or ~: Toggle 0 Memo</li>
        <li>1: Toggle 1 Memo</li>
        <li>2: Toggle 2 Memo</li>
        <li>3: Toggle 3 Memo</li>
      </ul>
      <hr />
      <h2>Credits</h2>
      <p>
        Original puzzle design: Game Freak
      </p>
      <p>
        Original implementation: <a href="https://github.com/steiner26/voltorbflip">Brandon Stein</a>
      </p>
    </div>
  )
}
