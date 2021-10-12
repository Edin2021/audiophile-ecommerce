import { useState } from "react";
import { useForm } from "react-hook-form";
import { GrDeliver } from "react-icons/gr";
import { useGlobalContext } from "../context";
import GoBackButton from "./GoBackButton";
import UserInputMessage from "./UserInputMessage";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function FormCheckout() {
  const { setShowModal } = useGlobalContext();
  const [eMoney, setEMoney] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowModal(true);
  };

  return (
    <form
      className="form-checkout"
      id="formCheckout"
      onSubmit={handleSubmit(onSubmit)}
    >
      <GoBackButton />
      <div className="form-wrapper">
        <h1>checkout</h1>
        <section className="billing-details">
          <h3>billing details</h3>
          <div className="input-fields">
            <label>
              name
              {errors.name && (
                <UserInputMessage message={errors.name.message} />
              )}
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is required.",
                })}
              />
            </label>
            <label>
              email address{" "}
              {errors.email && (
                <UserInputMessage message={errors.email.message} />
              )}
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: { value: EMAIL_REGEX, message: "Invalid email." },
                })}
              />
            </label>
            <label>
              phone number{" "}
              {errors.tel && <UserInputMessage message={errors.tel.message} />}
              <input
                type="tel"
                {...register("tel", { required: "Phone number is required." })}
              />
            </label>
          </div>
        </section>
        <section className="shipping-info">
          <h3>shipping info</h3>
          <div className="input-fields">
            <label>
              address{" "}
              {errors.address && (
                <UserInputMessage message={errors.address.message} />
              )}
              <input
                type="text"
                {...register("address", { required: "Address is required." })}
              />
            </label>
            <label>
              ZIP Code{" "}
              {errors.zipCode && (
                <UserInputMessage message={errors.zipCode.message} />
              )}
              <input
                type="number"
                {...register("zipCode", { required: "ZIP code is required" })}
              />
            </label>
            <label>
              city{" "}
              {errors.city && (
                <UserInputMessage message={errors.city.message} />
              )}
              <input
                type="text"
                {...register("city", { required: "City is required." })}
              />
            </label>
            <label>
              country{" "}
              {errors.country && (
                <UserInputMessage message={errors.country.message} />
              )}
              <input
                type="text"
                {...register("country", { required: "Country is required." })}
              />
            </label>
          </div>
        </section>
        <section className="payment-details">
          <h3>payment details</h3>
          <div className="input-fields">
            <label>
              <span>payment method</span>
              <div className="input-radios">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    defaultChecked
                    onChange={(e) => setEMoney(true)}
                  />
                  <span> e-Money</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    onChange={(e) => setEMoney(false)}
                  />
                  Cash on Delivery
                </label>
              </div>
            </label>
            {eMoney ? (
              <>
                {" "}
                <label>
                  e-Money Number{" "}
                  {errors.eMoney && (
                    <UserInputMessage message={errors.eMoney.message} />
                  )}
                  <input
                    type="number"
                    {...register("eMoney", {
                      required: "E-money is required.",
                    })}
                  />
                </label>
                <label>
                  e-Money PIN
                  {errors.ePin && (
                    <UserInputMessage message={errors.ePin.message} />
                  )}
                  <input
                    type="number"
                    {...register("ePin", {
                      required: "E-money pin is required.",
                    })}
                  />
                </label>
              </>
            ) : (
              <div className="delivery-info">
                <span className="icon">
                  <GrDeliver />
                </span>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </form>
  );
}

export default FormCheckout;
