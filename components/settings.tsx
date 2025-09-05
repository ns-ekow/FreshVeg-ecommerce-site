
import styles from './settings.module.css'
import { Button } from './ui/button'

export default function Settings(){
  return(
    <div className={styles.settings}>
      <div className={styles.top}>
        <div className={styles.head}> Account Settings</div>
        <div className={styles.acc_body}>
          <div className={styles.editForm}>
            <form className={styles.form}>
              <div className={styles.form_item}>
                <label>First name</label>
                <input type='text' placeholder='Evans' className={styles.input}></input>
              </div>
              <div className={styles.form_item}>
                <label>Last name</label>
                <input type='text' placeholder='Acheampong' className={styles.input}></input>
              </div>
              <div className={styles.form_item}>
                <label>Email</label>
                <input type='text' placeholder='eva@gmail.com' className={styles.input}></input>
              </div>
              <div className={styles.form_item}>
                <label>Phone Number</label>
                <input type='text' placeholder='(603) 555-0123' className={styles.input}></input>
              </div>
              <Button size="lg">Save Changes</Button>
            </form>
          </div>
          <div className={styles.editAvi}>
            <div className={styles.avi}></div>
            <Button>Save Image</Button>
          </div>
          
        </div>
      </div>
      <div className={styles.middle} >
         <div className={styles.head}>Billing Address</div>
        <div className={styles.body}>
          <form className={styles.form}>
            <div className={styles.flexed}>
              <div className={styles.form_item}>
                <label>First name</label>
                <input type='text' placeholder='Evans' className={styles.input}/>
              </div>
              <div className={styles.form_item}>
                <label>Last name</label>
                <input type='text' placeholder='Acheampong' className={styles.input}/>
              </div>
              <div className={styles.form_item}>
                <label>Company Name(optional)</label>
                <input type='text' placeholder='Zakisoft' className={styles.input}/>
              </div>
              
            </div>
            <div className={styles.form_item}>
              <label>Street Address</label>
              <input type='text' className={styles.input}/>
            </div>
            <div className={styles.flexed}>
              <div className={styles.form_item}>
                <label>Country</label>
                <input type='text' className={styles.input}/>
              </div>
              <div className={styles.form_item}>
                <label>State</label>
                <input type='text' className={styles.input}/>
              </div>
              <div className={styles.form_item}>
                <label>Zip Code</label>
                <input type='text' className={styles.input}/>
              </div>
            </div>
            <div className={styles.flexed}>
              <div className={styles.form_item}>
                <label>Email</label>
                <input type='text' placeholder='eva@gmail.com' className={styles.input}></input>
              </div>
              <div className={styles.form_item}>
                <label>Phone </label>
                <input type='text' placeholder='(603) 555-0123' className={styles.input}></input>
              </div>
            </div>
            <Button>Save Changes</Button>
          </ form>
        </div>
      </div>
      <div className={styles.bottom}>
         <div className={styles.head}> Change Password</div>
        <div className={styles.pass_body}>
          <form className={styles.form}>
            <div className={styles.form_item}>
              <label>Current Password</label>
              <input type='password' className={styles.input}/>
            </div>
            <div className={styles.flexed}>
              <div className={styles.form_item}>
                <label>New Password</label>
                <input type='password' className={styles.input}/>
              </div>
              <div className={styles.form_item}>
                <label>Confirm Password</label>
                <input type='password' className={styles.input}/>
              </div>
            </div>

            <Button>Change Password</Button>

          </form>
          
        </div>
      </div>
    </div>
  )
}