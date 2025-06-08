def summary(data):
    for student in data:
        name = student.get('name', '未知')
        scores = student.get('scores', [])
        total = sum(scores)
        avg = round(total / len(scores), 1) if scores else 0
        print(f"{name} 總分: {total}, 平均: {avg}")
