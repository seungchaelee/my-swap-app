# api가 불안정 하여 console창을 확인해 주세요
- [배포링크](https://my-swap-app.vercel.app)
- 문의는 id4720@gmail.com

# **메셔 과제 회고록**

## **개요**

이 리포트는 화폐 가격 정보를 관리하고 화폐 스왑을 위한 소프트웨어 개발 프로젝트에 관한 것입니다. 프로젝트에 사용된 각 파일과 작업 내용에 대한 설명, 우선 순위, 코드 설명, 작업물 회고를 포함하고 있습니다.

## **구현 계획**

프로젝트의 구현 계획은 다음과 같습니다.

### **1. fetchCurrencyPrice.ts**

- 설명: 화폐 가격 정보를 가져오는 모듈
- 작업 일정: 1일차
- 작업 내용: 외부 소스에서 화폐 가격 정보를 가져와서 반환하는 모듈 구현

### **2. SwapInterface.tsx**

- 설명: 스왑 인터페이스 구현
- 작업 일정: 1일차
- 작업 내용: 사용자가 화폐를 스왑할 수 있는 인터페이스를 제공하는 컴포넌트 구현

### **3. CurrencySelector.tsx**

- 설명: 화폐 선택 인터페이스 구현
- 작업 일정: 1일차
- 작업 내용: 사용자가 화폐를 선택할 수 있는 인터페이스를 제공하는 컴포넌트 구현

### **4. TokenModal.tsx**

- 설명: 토큰 모달 구현
- 작업 일정: 1일차
- 작업 내용: 사용자가 토큰을 선택하는 모달 다이얼로그를 제공하는 컴포넌트 구현

### **5. TokenButton.tsx**

- 설명: 토큰 버튼 구현
- 작업 일정: 1일차
- 작업 내용: 사용자가 특정 토큰을 선택할 수 있는 버튼을 제공하는 컴포넌트 구현

### **6. SwapButton.tsx**

- 설명: 스왑 버튼 구현
- 작업 일정: 1일차
- 작업 내용: 사용자가 화폐를 스왑할 수 있는 버튼을 제공하는 컴포넌트 구현

### **7. useCurrencyPrice.ts**

- 설명: 화폐 가격 정보를 관리하는 훅 구현
- 작업 일정: 2일차
- 작업 내용: 화폐 가격 정보를 관리하고 필요한 기능을 제공하는 커스텀 훅 구현(재사용성 및 가독성 증가)

### **8. useRecentTokens.ts**

- 설명: 최근 사용한 토큰 정보를 관리하는 훅 구현
- 작업 일정: 2일차
- 작업 내용: 최근에 사용한 토큰 정보를 관리하고 필요한 기능을 제공하는 커스텀 훅 구현(재사용성 및 가독성 증가)

## **우선 순위**

프로젝트의 작업을 다음과 같은 우선 순위로 진행했습니다.

1. SwapInterface.tsx - 사용자가 화폐를 스왑할 수 있는 인터페이스를 완성하여 프로젝트를 마무리했습니다.(초기 중요)
2. fetchCurrencyPrice.ts - 화폐 가격 정보를 가져오는 모듈을 먼저 구현하여 기본 데이터를 확보하고 시작했습니다.
3. CurrencySelector.tsx - 사용자가 화폐를 선택할 수 있는 인터페이스를 구현하여 기본적인 기능을 완성했습니다.(초기 테스트용)
4. TokenModal.tsx - 토큰 선택 모달 다이얼로그를 구현하여 사용자 경험을 향상시켰습니다.
5. TokenButton.tsx - 사용자가 특정 토큰을 선택할 수 있는 버튼을 추가하여 더 많은 기능을 제공했습니다.
6. SwapButton.tsx - 화폐 스왑을 위한 버튼을 구현하여 핵심 기능을 추가했습니다.
7. useCurrencyPrice.ts - 화폐 가격 정보를 관리하는 훅을 추가하여 코드의 재사용성을 높였습니다.
8. useRecentTokens.ts - 최근 사용한 토큰 정보를 관리하는 훅을 구현하여 더 많은 기능을 제공했습니다.

## **코드 설명**

### **1. fetchCurrencyPrice.ts**

**`fetchCurrencyPrice.ts`** 파일은 화폐 가격 정보를 가져오는 모듈입니다. 이 모듈은 외부 소스에서 화폐 가격 정보를 가져와서 반환하는 역할을 합니다. 이 모듈은 다른 컴포넌트에서 화폐 가격 정보를 필요로 할 때 사용됩니다.

### **2. CurrencySelector.tsx**

**`CurrencySelector.tsx`** 파일은 화폐 선택 인터페이스를 구현한 React 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 원하는 화폐를 선택할 수 있습니다. 이 컴포넌트는 프로젝트의 핵심 기능 중 하나인 화폐 선택을 가능하게 합니다.(테스트용)

### **3. SwapButton.tsx**

**`SwapButton.tsx`** 파일은 화폐 스왑을 위한 버튼을 구현한 React 컴포넌트입니다. 사용자는 이 버튼을 클릭하여 화폐를 스왑할 수 있습니다. 이 컴포넌트는 프로젝트의 핵심 기능 중 하나인 화폐 스왑을 가능하게 합니다.

### **4. SwapInterface.tsx**

**`SwapInterface.tsx`** 파일은 화폐 스왑을 위한 인터페이스를 구현한 React 컴포넌트입니다. 사용자는 이 인터페이스를 통해 화폐 스왑을 진행할 수 있으며, 필요한 정보를 입력할 수 있습니다. 이 컴포넌트는 프로젝트의 핵심 기능 중 하나인 화폐 스왑을 시각적으로 가능하게 합니다.

### **5. TokenButton.tsx**

**`TokenButton.tsx`** 파일은 특정 토큰을 선택할 수 있는 버튼을 구현한 React 컴포넌트입니다. 사용자는 이 버튼을 통해 특정 토큰을 선택할 수 있습니다. 이 컴포넌트는 사용자 경험을 향상시키는 데 도움이 됩니다.

### **6. TokenModal.tsx**

**`TokenModal.tsx`** 파일은 토큰 선택을 위한 모달 다이얼로그를 구현한 React 컴포넌트입니다. 사용자는 이 모달을 열어서 토큰을 선택할 수 있습니다. 이 모달은 사용자 경험을 개선하고 토큰 선택을 더 편리하게 만듭니다.

### **7. useCurrencyPrice.ts**

**`useCurrencyPrice.ts`** 파일은 화폐 가격 정보를 관리하는 커스텀 훅입니다. 이 훅을 사용하여 화폐 가격 정보를 관리하고 필요한 기능을 제공할 수 있습니다. 이는 코드의 재사용성과 가독성을 높이는 데 도움이 됩니다.

### **8. useRecentTokens.ts**

**`useRecentTokens.ts`** 파일은 최근 사용한 토큰 정보를 관리하는 커스텀 훅입니다. 이 훅을 사용하여 최근에 사용한 토큰 정보를 관리하고 필요한 기능을 제공할 수 있습니다. 이는 사용자 경험을 개선하고 토큰 선택을 더 편리하게 만듭니다.

## **작업물 회고**

### **어려웠던 점**

이 프로젝트에서 가장 도전적이었던 부분은 사용자 경험을 최적화하는 것이었습니다. 사용자가 편리하게 화폐를 선택하고 스왑할 수 있도록 하는 것은 복잡한 과정이었습니다. 또한 외부 데이터 소스와의 통합 및 데이터 동기화 문제도 어려움을 주었습니다.

하지만 이러한 어려움을 극복하기 위해 다양한 시도와 노력을 통해 문제를 해결했습니다. 저는 그동안 사용자 피드백을 수집하고 적극적으로 수정사항을 반영하여 사용자 경험을 지속적으로 향상시켰습니다.

### **배운 점**

이 프로젝트를 통해 다양한 기술과 도구를 습득하고 적용하는 데 많은 경험을 얻었습니다. 특히 React와 데이터 관리 라이브러리의 사용법을 더욱 깊이 이해하게 되었습니다.

또한 사용자 중심의 설계와 개발을 강조하는 중요성을 깨달았습니다. 요구사항을 반영하는 것이 얼마나 중요한지를 몸소 체험했습니다.

### **개선할 점**

프로젝트를 마치고 나서도 개선할 여지가 있습니다. 특히 데이터 동기화 및 성능 최적화 측면에서 더 발전시킬 수 있는 부분이 있습니다. 또한 사용자 인터페이스를 더 직관적으로 개선하여 사용자들이 더 쉽게 활용할 수 있도록 할 것입니다.

## **마무리**

이 프로젝트를 통해  성공적으로 화폐 가격 정보 관리와 화폐 스왑을 위한 소프트웨어를 개발하였습니다. 사용자들의 피드백을 듣고 개선사항을 반영하며 끊임없이 성장하였습니다.

미래에도 더 나은 소프트웨어를 개발하기 위해 노력할 것이며, 사용자들에게 더 나은 서비스를 제공하기 위해 끊임없이 발전해 나갈 것입니다. 나아가 더 많은 프로젝트를 성공시키기 위해 힘을 모아 나갈 것입니다.