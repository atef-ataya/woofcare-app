import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { StyledDivider, StyledTitle } from "./components/style";
import BlogPicture from "../../assets/images/blog-pic.png";
import Food from "../../assets/images/blog-pic-2.png";
import BlogCover from "../../assets/images/blog-bg.png";
import BlogCard from "../Home/components/Blog";
import { StyledCarousel } from "../Home/components/styles";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 4 },
  { width: 1750, itemsToShow: 5 },
];

const blogData = [
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
];

export default function Blog() {
  return (
    <Container fixed>
      <Box m={3}>
        <StyledTitle className="font-bold">
          10 Best Dog Food Healthy and Tasty
        </StyledTitle>
      </Box>
      <Box>
        <img src={BlogPicture} alt="" width="100%" />
      </Box>
      <Box sx={{ m: "10%" }}>
        <Typography variant="p" className="font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu proin
          velit vitae volutpat. Erat interdum dui, quam quisque lobortis nulla
          vehicula quis. Tristique turpis tellus nisi, ullamcorper aliquam. Est
          non, aliquet quis neque, laoreet malesuada quam.
          <br />
          <br />
          Eu, lectus lorem quis non aenean venenatis nunc, malesuada. Sit
          suspendisse sit vitae, mattis ornare vestibulum. Vel senectus amet
          suscipit imperdiet enim, ultricies in. Pretium ullamcorper etiam purus
          risus leo massa semper massa. Id aenean ullamcorper sit ut ac
          eleifend. Dictum quam neque et, in facilisis sollicitudin. Id mi
          tempor quam tortor. Commodo, platea cursus ultrices
        </Typography>
      </Box>
      <Box m={4}>
        <img src={Food} alt="" width="100%" />
      </Box>
      <Box sx={{ mx: "10%", my: 5 }}>
        <Typography variant="p" className="font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu proin
          velit vitae volutpat. Erat interdum dui, quam quisque lobortis nulla
          vehicula quis. Tristique turpis tellus nisi, ullamcorper aliquam. Est
          non, aliquet quis neque, laoreet malesuada quam.
          <br />
          <br />
          Eu, lectus lorem quis non aenean venenatis nunc, malesuada. Sit
          suspendisse sit vitae, mattis ornare vestibulum. Vel senectus amet
          suscipit imperdiet enim, ultricies in. Pretium ullamcorper etiam purus
          risus leo massa semper massa. Id aenean ullamcorper sit ut ac
          eleifend. Dictum quam neque et, in facilisis sollicitudin. Id mi
          tempor quam tortor. Commodo, platea cursus ultrices
        </Typography>
      </Box>
      <Box sx={{ mx: "10%" }} display="flex">
        <StyledDivider orientation="vertical" />
        <Typography variant="h4" className="font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
          imperdiet enim proin aliquam aliquet netus vestibulum curabitur
        </Typography>
      </Box>
      <Box sx={{ mx: "10%", my: 5 }}>
        <Typography variant="p" className="font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem ac
          lacus gravida nulla. Eu massa ut risus semper hendrerit sit. At ut
          nibh nulla turpis. Et at sed vulputate amet interdum.
          <br />
          Senectus eget nullam facilisis in. Lectus amet, cursus aliquet augue
          ullamcorper. Blandit morbi at consectetur purus egestas diam risus
          placerat id. Quam lectus turpis nunc proin odio morbi velit in. Ac in
          congue faucibus eu. Gravida fermentum donec pretium eget. Egestas ut
          congue commodo diam platea dui donec aenean leo. Vitae ornare
          penatibus eu, et, adipiscing. Quis lectus tincidunt interdum quis
          tristique fames mi, tempus sed. Dui, id at pellentesque mollis hac.
          Egestas sit fermentum libero ac. Vitae faucibus elementum,
          pellentesque purus dui in magna euismod dictum. Varius ultrices sit
          enim in nunc et laoreet.
          <br />
          Erat nisi, nibh lacus, ut nunc sed fusce eget massa. Ipsum mauris
          pretium, lectus pellentesque augue tellus suspendisse vel. Nulla massa
          morbi tortor, vitae aliquet. Pulvinar ipsum diam at sem. Quam tempor
          lectus nulla pretium, amet ridiculus fermentum dignissim. Vestibulum
          enim pharetra ante habitasse turpis. Ullamcorper consequat sit vel in
          bibendum eu viverra eu convallis. Pretium laoreet nibh bibendum quis
          consequat, id. Neque nullam faucibus hendrerit in ut laoreet eget.
          Massa orci, magna etiam eget vitae faucibus bibendum. Eleifend
          suspendisse rhoncus morbi ut velit aliquam. Orci, justo, cras sapien
          rhoncus, accumsan laoreet malesuada ultrices. Curabitur quam pulvinar
          dignissim nibh libero augue fermentum. Vitae erat egestas netus orci
          faucibus blandit rhoncus. Id etiam euismod enim sollicitudin.
          <br />
          Cursus dolor integer luctus scelerisque sed dui vitae. Tellus eu urna,
          interdum nunc quis. Ac accumsan mauris tellus nunc nam enim dui, a.
          Cras eros euismod tincidunt rhoncus. Erat tincidunt arcu tortor, eget
          condimentum. Proin commodo mattis tellus placerat nisi non. Egestas
          erat augue tortor, nisi, ultricies porttitor rhoncus. Accumsan nisi,
          in sagittis auctor fermentum, sit cras urna, purus. Rhoncus fermentum
          nibh aliquet nec dignissim eu in duis ac. Donec lectus ut sit
          tincidunt in. Integer gravida sed tincidunt venenatis, morbi. Eget est
          tortor, faucibus pharetra, turpis.
          <br />
          Volutpat facilisis tristique elit id commodo facilisis. Urna, diam
          massa libero fringilla. Tempus ullamcorper aenean amet, lectus
          tristique ornare velit molestie dui. Vitae nisl vulputate maecenas
          tincidunt sit enim urna. Volutpat, amet, auctor neque turpis vitae,
          ullamcorper arcu id. Eget enim tempus vitae sed et.
        </Typography>
      </Box>
      <Box my={7}>
        <Typography variant="h4" className="font-bold">
          Recommended Blogs
        </Typography>
        <StyledCarousel breakPoints={breakPoints}>
          {blogData.map((blog) => (
            <div style={{ width: "100%" }}>
              <BlogCard blogData={blog} />
            </div>
          ))}
        </StyledCarousel>
      </Box>
    </Container>
  );
}
