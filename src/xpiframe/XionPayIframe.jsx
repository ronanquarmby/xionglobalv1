import React, { useEffect } from 'react';

const XionPayIframe = () => {
  let referenceId = 1; // Starting reference ID

  useEffect(() => {
    const createProductAndSetIframeSrc = async () => {
      try {
        const productName = "Donate"; // Replace with your product name
        const productPrice = 0.5; // Replace with your product price in USD

        const response = await axios.post(
          'https://prodp-api.xion.app/api/v2/iframe/create-product',
          [
            {
              reference_id: referenceId.toString(),
              product_name: productName,
              product_price: productPrice,
            },
          ],
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMHhkYTlmNGEyZWM3ZDI3NDdkMzc4ZGMyOGRmYjdhYjNkZWZiNmMyNDQyIiwiY2xpZW50X2lkIjoiM3Yya3FzaDU3M2s3MGtuOTZscDB2YXRoNmYiLCJjbGllbnRfc2VjcmV0IjoiaDhwZ2V2YXFndTZrdWpwYWg0NGo2MGc4Nm1qM3MxaTBrcm12YXZlYTE2anNlbWdncHZxIiwiZXhwIjoxNjk1MzU3NjgyLCJpYXQiOjE2OTI3NjU2ODIsImlzcyI6Ilhpb24gR2xvYmFsIFNlcnZpY2UgQVBJIn0.Qd-N1OTW3oCyyTK9hiBYRhUeDkZ7wL2HPJ9mCGHWfh0', // Replace with your bearer key
            },
          }
        );

        const data = response.data;
        const productToken = data[0].product_code;
        const iframe = document.getElementById('myIframe');
        iframe.src = `https://checkout.xionpay.app/?token=${productToken}`;

        referenceId++; // Increment reference ID

        window.addEventListener(
          'message',
          async function(event) {
            if (event.data && event.data.orderCode) {
              const orderCode = event.data.orderCode;
              let orderStatus = 'pending';

              while (orderStatus !== 'successful') {
                const statusResponse = await axios.get(
                  `https://prodp-api.xion.app/api/v2/order/status/${orderCode}`,
                  {
                    headers: {
                      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMHhkYTlmNGEyZWM3ZDI3NDdkMzc4ZGMyOGRmYjdhYjNkZWZiNmMyNDQyIiwiY2xpZW50X2lkIjoiM3Yya3FzaDU3M2s3MGtuOTZscDB2YXRoNmYiLCJjbGllbnRfc2VjcmV0IjoiaDhwZ2V2YXFndTZrdWpwYWg0NGo2MGc4Nm1qM3MxaTBrcm12YXZlYTE2anNlbWdncHZxIiwiZXhwIjoxNjk1MzU3NjgyLCJpYXQiOjE2OTI3NjU2ODIsImlzcyI6Ilhpb24gR2xvYmFsIFNlcnZpY2UgQVBJIn0.Qd-N1OTW3oCyyTK9hiBYRhUeDkZ7wL2HPJ9mCGHWfh0', // Replace with your bearer key
                    },
                  }
                );

                const statusData = statusResponse.data;
                orderStatus = statusData.status;

                if (orderStatus !== 'successful') {
                  await new Promise(resolve => setTimeout(resolve, 5000));
                }
              }
            }
          },
          false
        );
      } catch (error) {
        console.error('Error:', error);
      }
    };

    createProductAndSetIframeSrc();
  }, []);

  return (
    <div>
      <iframe
        id="myIframe"
        src=""
        height="283px"
        width="594px"
        frameBorder="0" 
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default XionPayIframe;
