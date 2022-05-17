const { PrismaClient } = require('@prisma/client')

module.exports = {
    prisma: prisma = new PrismaClient()
}