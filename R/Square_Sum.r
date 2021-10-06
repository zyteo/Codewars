# ZY, 6 Oct 2021
# Complete the square sum function so that it squares each number passed into it and then sums the results together.

square_sum <- function(nums) {
  sum <- 0
  for (val in nums)
{
    newNum <- val^2
    sum <- sum + newNum
}
  return(sum)
}