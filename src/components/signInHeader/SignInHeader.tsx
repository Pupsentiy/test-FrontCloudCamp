import { FC } from "react";
import { NavLink } from "react-router-dom";

import { links } from "../../core/constants/constants";
import { TLink } from "../../core/constants/constants.types";

import fileIcon from "../../assets/img/Folder.svg";

import styles from "./singInHeader.module.scss";

const SignInHeader: FC = () => {
  return (
    <div className={styles.signInHeader_header_wrapper}>
      <div className={styles.signInHeader_wrapper_avatar}>АК</div>
      <div className={styles.signInHeader_owner_info}>
        <h2 className={styles.signInHeader_owner__name}>
          Александр Ковалевский
        </h2>

        <ul className={styles.signInHeader_contacts_list}>
          {links &&
            links.map((item: TLink, i: number) => (
              <li className={styles.signInHeader_contacts_item} key={i}>
                <NavLink
                  to={item.link}
                  className={styles.signInHeader_contacts__link}
                  target="_blank"
                >
                  <img src={fileIcon} alt="icon link" />
                  {item.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default SignInHeader;
