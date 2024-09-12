---
title: My Journey in Learning to Code
date: 2023-04-20
slug: learning-to-code
---

# My Journey in Learning to Code

Learning to code can be both exciting and challenging. In this post, I'll share my personal experience of becoming a programmer.

I started with HTML and CSS, then moved on to JavaScript. The journey wasn't always easy, but the satisfaction of creating something from scratch kept me motivated.

Here are some examples of basic "Hello, World!" programs in Python and Elixir:

Python:
```python
def fibonacci_recursive(n):
    if n <= 1:
        return n
    else:
        return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

def fibonacci_iterative(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# Example usage
n = 10
print(f"The {n}th Fibonacci number (recursive): {fibonacci_recursive(n)}")
print(f"The {n}th Fibonacci number (iterative): {fibonacci_iterative(n)}")

# Print the first 10 Fibonacci numbers
print("First 10 Fibonacci numbers:")
print([fibonacci_iterative(i) for i in range(10)])
```
Elixir:
```elixir
defmodule NumberProcessor do
  def process_numbers(numbers) do
    numbers
    |> remove_negatives()
    |> square_list()
    |> sum_list()
    |> apply_tax(0.15)
    |> format_result()
  end

  defp remove_negatives(numbers) do
    Enum.filter(numbers, &(&1 >= 0))
  end

  defp square_list(numbers) do
    Enum.map(numbers, &(&1 * &1))
  end

  defp sum_list(numbers) do
    Enum.sum(numbers)
  end

  defp apply_tax(total, tax_rate) do
    total * (1 + tax_rate)
  end

  defp format_result(final_amount) do
    :io_lib.format("$~.2f", [final_amount])
    |> to_string()
  end
end

# Example usage
numbers = [-3, 5, 2, -1, 7, 8, 4]
result = NumberProcessor.process_numbers(numbers)
IO.puts("Processed result: #{result}")
```






If you're considering learning to code, remember:

- Consistency is key
- Practice, practice, practice
- Don't be afraid to ask for help
- Build projects that interest you

Happy coding!
