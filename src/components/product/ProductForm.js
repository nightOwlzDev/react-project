import React, { Component } from 'react'
import { reduxForm,Field } from 'redux-form'
import FormField from '../common/FormField'
import { ProductFormFields } from './ProductFormField'

class ProductForm extends Component {


    renderFields = (formFields) =>{

        return formFields.map( ( { name,type,label , required }) =>{
                return (
                    <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
                )
        } )

    }

    render() {
        return (
            <div >
                <form>
                    {this.renderFields(ProductFormFields)}
                    <hr/>
                    <button className="btn btn-block btn-info" type="submit">
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {

      const errors = {}
      ProductFormFields.forEach( ({ name , required }) =>{
            if (!values[name] && required ){
                errors[name] = "กรุณากรอกข้อมูลด้วยค่ะ"
            } 
      })
      return errors

}

ProductForm = reduxForm({ validate , form : "productForm"})(ProductForm)

export default ProductForm
