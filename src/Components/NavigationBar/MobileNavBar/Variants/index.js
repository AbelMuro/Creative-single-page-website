export const menuVariants = {
    hidden: {
        scale: 0,
    },

    show: {
        scale: 1,
        transition: {
            type: 'spring',
            damping: 6,
            stiffness: 120,
        }
    },

    exit: {
        scale: 0,
        transition: {
            duration: 0.3
        }
    }
}

