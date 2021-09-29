import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
