import { useQuery } from "@apollo/client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";

interface ProductType {
  id: string;
  name: string;
  description: string;
  quantity: number;
  image: string;
  price: number;
  onSale: boolean;
}

const GetProducts = () => {
  const { loading, error, data } = useQuery(LOAD_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>On Sale</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.products.map(
            ({
              id,
              name,
              description,
              quantity,
              price,
              onSale,
            }: ProductType) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{onSale ? "Yes" : "No"}</TableCell>
                <TableCell>{description}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GetProducts;
