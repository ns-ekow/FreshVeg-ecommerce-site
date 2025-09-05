import styles from './dashboard.module.css'

export default function Dashboard(){
  return(
    <div className={styles.dashboard}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <div className={styles.avi}></div>
          <h3>Evans Acheampong</h3>
          <p>Customer</p>
          <a>Edit profile</a>
        </div>
        <div className={styles.info}>
          <p>BILLING ADDDRESS</p>
          <div>
            <h3>Evans Acheampong</h3>
            <p>Accra, Pokuase Amasaman Road</p>
          </div>
          <div>
            <p>evansachie011@gmail.com</p>
            <p>(+233) 57 008 1720</p>
          </div>
          <a>Edit Address</a>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  )
}