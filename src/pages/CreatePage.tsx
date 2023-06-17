import { Fragment } from "react";

import InfoAboutMeForm from "../components/infoAboutMeForm/InfoAboutMeForm";
import Modal from "../components/modal/Modal";

const CreatePage = () => {
  return (
    <Fragment>
      <InfoAboutMeForm />
      <Modal />
    </Fragment>
  );
};

export default CreatePage;
