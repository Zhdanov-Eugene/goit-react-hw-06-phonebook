import Layout from './components/Layout/Layout';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <Layout>
      <h1>PhoneBook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
}