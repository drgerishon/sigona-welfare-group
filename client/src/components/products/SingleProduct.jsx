import React from 'react';
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from '../../styles/products';
import ProductMeta from './ProductMeta';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { useDialogModal } from '../../hooks/useDialogModel';
import ProductDetail from '../productDetails';
const SingleProduct = ({ product, matches }) => {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail)
  return (
    <>
    <Product>
      <ProductImage src={product.image} />
      <ProductMeta product={product} matches={matches} />
      <ProductActionWrapper>
        <Stack direction="row">
          <ProductFavButton isfav={1}>
            <FavoriteIcon />
          </ProductFavButton>
          <ProductActionButton>
            <ShareIcon color="primary" />
          </ProductActionButton>
          <ProductActionButton onClick={() => showProductDetailDialog()}>
            <FitScreenIcon color="primary" />
          </ProductActionButton>
        </Stack>
      </ProductActionWrapper>
    </Product>
    <ProductAddToCart variant='contained'>Add to Cart</ProductAddToCart>
    <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProduct;
