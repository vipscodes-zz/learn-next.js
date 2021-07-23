import Layout from "../../components/Layout";
import PropTypes from "prop-types";
export default function Users(props) {
  const { dataUsers } = props;
  console.log(dataUsers);
  return (
    <Layout titlePage="Users">
      {dataUsers.map((user) => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        );
      })}
    </Layout>
  );
}

Users.propTypes = {
  dataUsers: PropTypes.array,
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
