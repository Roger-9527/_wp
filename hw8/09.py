def most_common(nums):
    if not nums:
        return None 
    counts = {}
    for num in nums:
        counts[num] = counts.get(num, 0) + 1
    max_num = max(counts, key=counts.get)
    return max_num
