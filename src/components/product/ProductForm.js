import React, { Component } from 'react'
import { reduxForm,Field } from 'redux-form'
import FormField from '../common/FormField'
import { ProductFormFields } from './ProductFormField'
import { connect } from 'react-redux'


class ProductForm extends Component {


    renderFields = (formFields) =>{

        return formFields.map( ( { name,type,label , required }) =>{
                return (
                    <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
                )
        } )

    }

    render() {
        const { onProductSubmit } = this.props
        return (
            <div >
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
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


const mapStateToProps = ({ products }) =>{

   if (products && products.id) {
        
    return { initialValues : products }

   }else{

    return {}
    
   }

   


}

ProductForm = reduxForm({ validate , form : "productForm"})(ProductForm)

export default connect(mapStateToProps)(ProductForm)
