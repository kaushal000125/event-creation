import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const error=useRouteError();

    let title='An error occured';
    let message='Something went wrong!';
    if(error.status===500){
        message=JSON.parse(error.data).message;
    }
    if(error.status===400){
        title='Not Found';
        message='Could not find resources or page';
    }

  return (
    <PageContent title='An error occured!' >
        <p>Something went wrong!</p>
    </PageContent>
  )
}

export default ErrorPage
