import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function Filter({ setFilter, filter }) {
  return (
    <div>
      <Form
        inline
        onSubmit={(e) => e.preventDefault()}
        onReset={(e) => setFilter("")}
      >
        <Form.Control
          as="input"
          type="text"
          placeholder="Search Recipe"
          className="mr-sm-2"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
        <Button variant="danger" type="reset">
          Clear Search
        </Button>
      </Form>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
