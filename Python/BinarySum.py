# ZY, 9 Oct 2021
# Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.


def add_binary(a, b):
    c = a + b
    # bin(c) converts c to binary, [2:] removes the "0b" in front (slice)
    return str(bin(c)[2:])


## alternative
# def add_binary(a,b):
#     return '{0:b}'.format(a + b)
