---
title: Example Tutorial
description: |
    This is an example tutorial to test the layout and syntax highlighting.
category:
    name: Engineering
    href: #
author:
    name: Felix Andreas
    imageUrl: https://assets.melli.com/images/team/felix-andreas.webp
date: 2022-01-02T16:00:00.000+00:00
readingTime: 7min
imageUrl: https://assets.melli.com/images/stock/jobs/backend-developer.webp
---

## Python 🚀

### Creating an AI Assistant in Python 🤗

Here is how you create an AI assistant in Python:

```python
class Melli:
    def __init__(self, lang):
        self.lang = lang

melli = Emlia(lang="de")
```

### How to annoy your colleagues 😡

Change the value of the `2` integer object to `42`:

```python
>>> import ctypes
>>> ctypes.c_int.from_address(id(2) + 24).value = 42
>>> 2 == 42
True
>>> 1 + 1
42
>>> 2 * 2
1764
```

### The object-type relationship in Python 🤯

The `object` and `type` types have an interesting relationship.

```python
>>> isinstance(object, type)
True
>>> isinstance(type, object)
True
>>> isinstance(type, type)
True
>>> isinstance(object, object)
True
>>> issubclass(type, object)
True
>>> issubclass(object, type)
False
```

## Syntax highlighting in other languages

The syntax highlighting also works for other languages.

### Rust 🦀

```rust
fn main() {
    let mut vec = vec![1, 5, 10, 2, 15];
    
    vec.sort();

    assert_eq!(vec, vec![1, 2, 5, 10, 15]);
}
```


### Javascript 😭

```javascript
> typeof NaN
'number'
> [] + []
''
> [] + {}
'[object Object]'
> {} + []
0
> 9 + "1"
'91'
```