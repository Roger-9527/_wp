def most_common(m):
    if not m:
        return None
    n = {}
    for num in m:
        n[num] = n.get(num, 0) + 1
    max_num = max(n, key=n.get)
    return max_num
