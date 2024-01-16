const authorizeRoles = (roles) => {
    return (req, res, next) => {
        const userRoles = req.user?.roles; // Use optional chaining to avoid errors if req.user is undefined
        if (!userRoles || !roles.some(role => userRoles.includes(role))) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        next();
    };
};

module.exports = authorizeRoles;