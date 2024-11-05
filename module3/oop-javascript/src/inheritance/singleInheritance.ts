// single inheritance
class ParentClass {}
class ChildClass extends ParentClass {}

// mulit-level inheritance
class ParentMultiLevel {}
class ChildMulitiLevel extends ParentMultiLevel {}
class AnotherChildMultiLevel extends ChildMulitiLevel {}

// Multiple Inheritance
interface Multiple1 {}
interface Multiple2 {}

class MultipleClass implements Multiple1, Multiple2 {}

// Hirarchical Inheritance
class Hie1 {}
class Chi1 extends Hie1 {}
class Chi2 extends Hie1 {}
class Chi3 extends Hie1 {}
