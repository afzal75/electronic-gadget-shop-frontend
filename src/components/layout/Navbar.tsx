

import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
    return (
        <Container>
            <Stack
                py={2}
                direction={{
                    md: "row",
                }}
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h4" component={Link} href={"/"} fontWeight={600}>
                    Mobile{" "}
                    <Box component="span" color="primary.main">
                        Gadgate
                    </Box>
                </Typography>
                <Stack direction={"row"} gap={2}>
                    <Typography
                        component={Link}
                        href="/"
                        sx={{
                            borderBottom: "2px solid white",
                            borderRadius: "3px",
                            px: "10px",
                            "&:hover": {
                                px: "10px",
                                borderBottom: "2px solid gray",
                                borderRadius: "3px",
                                cursor: "pointer",
                                transition: "all 0.5s",
                            },
                        }}
                    >
                        Home
                    </Typography>
                    <Typography
                        component={Link}
                        href="/flash-sale"
                        sx={{
                            borderBottom: "2px solid white",
                            borderRadius: "3px",
                            px: "10px",
                            "&:hover": {
                                px: "10px",
                                borderBottom: "2px solid gray",
                                borderRadius: "3px",
                                cursor: "pointer",
                                transition: "all 0.5s",
                            },
                        }}
                    >
                        Flash Sale
                    </Typography>
                    <Typography
                        component={Link}
                        href="/products"
                        sx={{
                            borderBottom: "2px solid white",
                            borderRadius: "3px",
                            px: "10px",
                            "&:hover": {
                                px: "10px",
                                borderBottom: "2px solid gray",
                                borderRadius: "3px",
                                cursor: "pointer",
                                transition: "all 0.5s",
                            },
                        }}
                    >
                        Products
                    </Typography>
                    <Typography
                        component={Link}
                        href="/dashboard"
                        sx={{
                            borderBottom: "2px solid white",
                            borderRadius: "3px",
                            px: "10px",
                            "&:hover": {
                                px: "10px",
                                borderBottom: "2px solid gray",
                                borderRadius: "3px",
                                cursor: "pointer",
                                transition: "all 0.5s",
                            },
                        }}
                    >
                        Dashboard
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Navbar;