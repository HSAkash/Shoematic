import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('Cash on delivery')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment</h1>
            <Form onSubmit={submitHandler}>
                <Form.Label as='legend'>Select Method</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type='radio'
                        label='Cash on delivery'
                        name='paymentMethod'
                        id='Cash_on_delivery'
                        checked
                        onChange={(e)=> setPaymentMethod('Cash on delivery')}
                    />

                    <Form.Check
                        disabled
                        type='radio'
                        label='PayPal or Credit Card'
                        id='paypal'
                        name='paymentMethod'
                        onChange={(e) => setPaymentMethod('Paypal')}
                    />
                    </div>
                ))}
                <Button style = {{margin:"10px 0px 0px 0px"}} variant='primary' type='submit'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
