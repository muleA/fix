export default function TermsandPolicyForm() {
  return (
    <>
      <fieldset className="form-fieldset">
        <div className="mb-3">
          <label className="form-label required">Terms of Use</label>
          <textarea
            className="
        tw-form-control
        tw-w-full
        tw-text-base
        tw-font-normal
        tw-border tw-rounded"
            rows={4}
            cols={20}
            placeholder="Terms and use "
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label required">Policy</label>
          <textarea
            className="
        tw-form-control
        tw-w-full
        tw-text-base
        tw-font-normal     
      "
            rows={4}
            cols={20}
            placeholder="Policy "
          ></textarea>
        </div>
      </fieldset>
    </>
  );
}
