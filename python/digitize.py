# 8 kyu - Convert number to reversed array of digits

# Convert number to reversed array of digits
# Given a random number:
# You have to return the digits of this number within an array in reverse order.
#
# Example: 348597 => [7,9,5,8,4,3]

def digitize(n):
    n = str(n)[::-1]
    answer = []
    for x in n:
        answer.append(int(x))
    return answer

# Alternative Solutions:
# def digitize(n):
#     return map(int, str(n)[::-1])
#
# def digitize(n):
#     return [int(x) for x in str(n)[::-1]]    
