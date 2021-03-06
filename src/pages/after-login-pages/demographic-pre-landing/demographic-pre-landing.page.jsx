import React, { Component } from 'react';

import DemographicForm from 'components/after-login-components/demographic-pre-landing/demographic-form/demographic-form.component';
import AcceptDescriptionContainer from 'components/after-login-components/demographic-pre-landing/accept-description-container/accept-description-container.component';
import GlobalStyle from 'components/general-use-components/global-style/global-style.component';

const description =
  'A continuación se te realizarán un par de preguntas demográficas, esto es con el objetivo de analizar de mejor manera tus resultados al momento de contestar tus cuestionarios. ';

class DemographicPreLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAcceptedTerms: false
    };
  }

  acceptTerms = () => {
    this.setState({ hasAcceptedTerms: true });
  };

  render() {
    const { hasAcceptedTerms } = this.state;

    return (
      <>
        <GlobalStyle bgColor='linear-gradient(to right, #0083b0, #00b4db)' />
        {hasAcceptedTerms ? (
          <DemographicForm />
        ) : (
          <AcceptDescriptionContainer
            title='¿Estás de acuerdo?'
            description={description}
            btnTitle='Estoy de acuerdo'
            width='800px'
            onClickHandler={this.acceptTerms}
          />
        )}
      </>
    );
  }
}

export default DemographicPreLandingPage;
